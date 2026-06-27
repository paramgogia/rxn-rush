import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { reactionsByChapter, buildOptions } from '../data/reactions'
import { NAMED_REACTIONS } from '../data/namedReactions'
import { CHAPTER_ORDER, UNLOCK_THRESHOLD } from '../data/chapters'

const COMBO_CARD_MILESTONE = 5 // reveal a card every 5 correct in a row
const STARTING_LIVES = 3
const DUPLICATE_CARD_BONUS = 50

// --- coin scoring ----------------------------------------------------------
function coinsForAnswer(timeMs, comboAfter) {
  let base
  if (timeMs <= 3000) base = 150
  else if (timeMs <= 6000) base = 100
  else base = 70
  // combo 5+ doubles everything
  return comboAfter >= COMBO_CARD_MILESTONE ? base * 2 : base
}

// pick a card to reveal: prefer the reaction's own named reaction, else an
// uncollected card from the same chapter, else any uncollected card.
function pickRevealCard(reaction, collected) {
  if (reaction.namedReactionId) return reaction.namedReactionId
  const owned = new Set(collected)
  const sameChapter = NAMED_REACTIONS.find(
    (n) => n.chapter === reaction.chapter && !owned.has(n.id),
  )
  if (sameChapter) return sameChapter.id
  const anyNew = NAMED_REACTIONS.find((n) => !owned.has(n.id))
  return anyNew ? anyNew.id : NAMED_REACTIONS[0].id
}

function buildSession(chapterKey) {
  const reactions = reactionsByChapter(chapterKey)
  // shuffle the question order, pre-build options once so they don't reshuffle
  const order = [...reactions]
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return order.map((r) => ({ reaction: r, options: buildOptions(r) }))
}

export const useGame = create(
  persist(
    (set, get) => ({
      // ---- durable (persisted) ----
      coins: 0,
      collectedCards: [], // array of namedReaction ids
      chapterProgress: {}, // { [chapter]: { attempted, correct, bestAccuracy } }
      unlockedChapters: ['hydrocarbons'],
      muted: true,

      // ---- transient (session) ----
      screen: 'home', // home | chapter_select | game | results | deck | chain
      lives: STARTING_LIVES,
      combo: 0,
      maxCombo: 0,
      currentChapter: null,
      currentQuestionIndex: 0,
      sessionQuestions: [],
      sessionAnswers: [], // { reactionId, correct, timeMs, label }
      sessionCoins: 0,
      sessionNewCards: [], // card ids first collected this session
      reveal: null, // { cardId } when a card-reveal overlay should show
      lastResult: null, // { correct, coins, reactionId } for the just-answered q

      // ---- navigation ----
      setScreen: (screen) => set({ screen }),
      toggleMute: () => set((s) => ({ muted: !s.muted })),

      goHome: () => set({ screen: 'home' }),

      openChapterSelect: () => set({ screen: 'chapter_select' }),

      // ---- rush mode ----
      startRush: (chapterKey) =>
        set({
          screen: 'game',
          currentChapter: chapterKey,
          sessionQuestions: buildSession(chapterKey),
          currentQuestionIndex: 0,
          lives: STARTING_LIVES,
          combo: 0,
          maxCombo: 0,
          sessionAnswers: [],
          sessionCoins: 0,
          sessionNewCards: [],
          reveal: null,
          lastResult: null,
        }),

      // record an answer; the card claim (if any) happens atomically here so a
      // React StrictMode double-mount of the overlay can never double-claim.
      answerQuestion: ({ reaction, isCorrect, timeMs }) => {
        const state = get()
        let combo = state.combo
        let lives = state.lives
        let coinsEarned = 0
        let reveal = null
        let collectedCards = state.collectedCards
        let sessionNewCards = state.sessionNewCards

        if (isCorrect) {
          combo += 1
          coinsEarned = coinsForAnswer(timeMs, combo)
          if (combo % COMBO_CARD_MILESTONE === 0) {
            const cardId = pickRevealCard(reaction, collectedCards)
            const alreadyOwned = collectedCards.includes(cardId)
            if (alreadyOwned) {
              coinsEarned += DUPLICATE_CARD_BONUS
            } else {
              collectedCards = [...collectedCards, cardId]
              sessionNewCards = [...sessionNewCards, cardId]
            }
            reveal = { cardId, isNew: !alreadyOwned, bonus: alreadyOwned ? DUPLICATE_CARD_BONUS : 0 }
          }
        } else {
          combo = 0
          lives -= 1
        }

        set({
          combo,
          maxCombo: Math.max(state.maxCombo, combo),
          lives,
          coins: state.coins + coinsEarned,
          sessionCoins: state.sessionCoins + coinsEarned,
          collectedCards,
          sessionNewCards,
          sessionAnswers: [
            ...state.sessionAnswers,
            {
              reactionId: reaction.id,
              correct: isCorrect,
              timeMs,
              namedReactionId: reaction.namedReactionId,
              label: reaction.namedReactionId
                ? null
                : reaction.namedReactionText || reaction.chapterLabel,
            },
          ],
          reveal,
          lastResult: { correct: isCorrect, coins: coinsEarned, reactionId: reaction.id },
        })
      },

      clearReveal: () => set({ reveal: null }),

      // advance to next question or end the session
      nextQuestion: () => {
        const state = get()
        const nextIndex = state.currentQuestionIndex + 1
        const outOfQuestions = nextIndex >= state.sessionQuestions.length
        const outOfLives = state.lives <= 0
        if (outOfLives || outOfQuestions) {
          get().endSession()
        } else {
          set({ currentQuestionIndex: nextIndex, lastResult: null })
        }
      },

      endSession: () => {
        const state = get()
        const answers = state.sessionAnswers
        const total = answers.length
        const correct = answers.filter((a) => a.correct).length
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

        // update cumulative chapter progress
        const ch = state.currentChapter
        const prev = state.chapterProgress[ch] || { attempted: 0, correct: 0, bestAccuracy: 0 }
        const chapterProgress = {
          ...state.chapterProgress,
          [ch]: {
            attempted: prev.attempted + total,
            correct: prev.correct + correct,
            bestAccuracy: Math.max(prev.bestAccuracy, accuracy),
          },
        }

        // unlock the next chapter if this session passed the threshold
        let unlockedChapters = state.unlockedChapters
        if (accuracy >= UNLOCK_THRESHOLD) {
          const idx = CHAPTER_ORDER.indexOf(ch)
          const next = CHAPTER_ORDER[idx + 1]
          if (next && !unlockedChapters.includes(next)) {
            unlockedChapters = [...unlockedChapters, next]
          }
        }

        set({ chapterProgress, unlockedChapters, screen: 'results' })
      },

      replaySession: () => get().startRush(get().currentChapter),

      // generic coin award (used by Chain Reaction mode)
      awardCoins: (n) => set((s) => ({ coins: s.coins + n })),

      // ---- dev / reset ----
      resetProgress: () =>
        set({
          coins: 0,
          collectedCards: [],
          chapterProgress: {},
          unlockedChapters: ['hydrocarbons'],
          screen: 'home',
        }),
    }),
    {
      name: 'rxn-rush-save-v1',
      version: 1,
      partialize: (s) => ({
        coins: s.coins,
        collectedCards: s.collectedCards,
        chapterProgress: s.chapterProgress,
        unlockedChapters: s.unlockedChapters,
        muted: s.muted,
      }),
      // Defensively reconcile any saved data with current defaults so a corrupt
      // or outdated save can never crash the game or lock a student out.
      merge: (persisted, current) => {
        const p = persisted && typeof persisted === 'object' ? persisted : {}
        const validCards = new Set(NAMED_REACTIONS.map((n) => n.id))
        const validChapters = new Set(CHAPTER_ORDER)
        const cards = Array.isArray(p.collectedCards)
          ? p.collectedCards.filter((id) => validCards.has(id))
          : []
        const unlocked = Array.isArray(p.unlockedChapters)
          ? p.unlockedChapters.filter((k) => validChapters.has(k))
          : []
        return {
          ...current,
          coins: Number.isFinite(p.coins) && p.coins >= 0 ? p.coins : 0,
          collectedCards: cards,
          chapterProgress:
            p.chapterProgress && typeof p.chapterProgress === 'object' ? p.chapterProgress : {},
          // hydrocarbons is always available
          unlockedChapters: Array.from(new Set(['hydrocarbons', ...unlocked])),
          muted: typeof p.muted === 'boolean' ? p.muted : true,
        }
      },
    },
  ),
)

// ---- selectors / derived helpers (used by Results) ----
export function computeSessionStats(state) {
  const answers = state.sessionAnswers
  const total = answers.length
  const correct = answers.filter((a) => a.correct).length
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  // weak spot: the named reaction / topic missed most often
  const missCount = {}
  answers
    .filter((a) => !a.correct)
    .forEach((a) => {
      const key = a.namedReactionId || a.label || 'this topic'
      missCount[key] = (missCount[key] || 0) + 1
    })
  let weakSpot = null
  let max = 0
  for (const [k, v] of Object.entries(missCount)) {
    if (v > max) {
      max = v
      weakSpot = k
    }
  }
  return { total, correct, accuracy, coins: state.sessionCoins, weakSpot, missCount }
}
