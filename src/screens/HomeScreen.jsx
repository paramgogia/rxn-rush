import { motion } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { CHAPTERS, UNLOCK_THRESHOLD } from '../data/chapters'
import { reactionsByChapter } from '../data/reactions'
import { NAMED_REACTIONS, TOTAL_CARDS } from '../data/namedReactions'
import { sfx } from '../utils/sound'

function MuteButton() {
  const muted = useGame((s) => s.muted)
  const toggle = useGame((s) => s.toggleMute)
  return (
    <button
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-sm hairline active:scale-90"
      aria-label={muted ? 'Unmute' : 'Mute'}
    >
      {muted ? '🔇' : '🔊'}
    </button>
  )
}

export default function HomeScreen() {
  const coins = useGame((s) => s.coins)
  const collected = useGame((s) => s.collectedCards)
  const unlocked = useGame((s) => s.unlockedChapters)
  const progress = useGame((s) => s.chapterProgress)
  const startRush = useGame((s) => s.startRush)
  const openChapterSelect = useGame((s) => s.openChapterSelect)
  const setScreen = useGame((s) => s.setScreen)
  const resetProgress = useGame((s) => s.resetProgress)

  const handleReset = () => {
    if (
      window.confirm('Reset all progress? Coins, collected cards and unlocked chapters will be erased.')
    ) {
      resetProgress()
    }
  }

  const menu = [
    { label: 'Rush Mode', sub: 'Beat the 10-second clock', emoji: '⚡', onClick: openChapterSelect },
    { label: 'Chain Reaction', sub: 'Build the full sequence', emoji: '🔗', onClick: () => setScreen('chain') },
    { label: 'IUPAC Challenge', sub: 'Name the tricky structures', emoji: '🏷️', onClick: () => setScreen('iupac') },
    { label: 'My Deck', sub: `${collected.length} / ${TOTAL_CARDS} cards collected`, emoji: '🃏', onClick: () => setScreen('deck') },
  ]

  return (
    <div className="screen">
      {/* top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-full bg-gold/[0.12] px-3 py-1.5 hairline !border-gold/20">
          <span className="text-xs">💰</span>
          <span className="text-[13px] font-extrabold tnum text-gold">{coins.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 hairline">
            <span className="text-xs">🃏</span>
            <span className="text-[13px] font-bold tnum text-white/75">
              {collected.length}/{TOTAL_CARDS}
            </span>
          </div>
          <MuteButton />
        </div>
      </div>

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 text-center"
      >
        <h1 className="text-[56px] font-black leading-none tracking-[-0.04em]">
          <span className="text-brand">RXN</span>
          <span className="text-white"> Rush</span>
        </h1>
        <p className="mt-2.5 eyebrow">MHT-CET · Organic Reactions</p>
      </motion.div>

      {/* menu */}
      <div className="mt-10 space-y-2.5">
        {menu.map((m, i) => (
          <motion.button
            key={m.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * i }}
            onClick={() => {
              sfx.tap()
              m.onClick()
            }}
            className="flex w-full items-center gap-3.5 rounded-2xl bg-panel2 p-3.5 hairline active:scale-[0.98] transition-transform"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-xl hairline">
              {m.emoji}
            </span>
            <div className="min-w-0 text-left">
              <p className="text-[15px] font-bold leading-tight text-white">{m.label}</p>
              <p className="truncate text-[11.5px] text-white/45">{m.sub}</p>
            </div>
            <span className="ml-auto text-white/25">›</span>
          </motion.button>
        ))}
      </div>

      {/* chapters */}
      <p className="mb-2.5 mt-9 eyebrow">Chapters</p>
      <div className="grid grid-cols-2 gap-2.5">
        {CHAPTERS.map((c, i) => {
          const isUnlocked = unlocked.includes(c.key)
          const best = progress[c.key]?.bestAccuracy || 0
          const count = reactionsByChapter(c.key).length
          const named = NAMED_REACTIONS.filter((n) => n.chapter === c.key).length
          return (
            <motion.button
              key={c.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 * i }}
              disabled={!isUnlocked}
              onClick={() => {
                sfx.tap()
                startRush(c.key)
              }}
              className={`relative overflow-hidden rounded-2xl p-3 text-left hairline transition-transform ${
                isUnlocked ? 'bg-panel2 active:scale-[0.97]' : 'bg-white/[0.015]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-lg"
                  style={{ filter: isUnlocked ? 'none' : 'grayscale(1) opacity(0.4)' }}
                >
                  {c.emoji}
                </span>
                {!isUnlocked && <span className="text-xs opacity-50">🔒</span>}
              </div>
              <p
                className={`mt-2 text-[12.5px] font-bold leading-tight ${
                  isUnlocked ? 'text-white' : 'text-white/35'
                }`}
              >
                {c.short}
              </p>
              <p className="mt-0.5 text-[9.5px] tnum text-white/35">
                {count} rxns · {named} cards
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${best}%`, background: c.color }}
                />
              </div>
              {!isUnlocked && (
                <p className="mt-1.5 text-[9px] text-white/30">{UNLOCK_THRESHOLD}% to unlock</p>
              )}
            </motion.button>
          )
        })}
      </div>

      <button
        onClick={handleReset}
        className="mx-auto mt-7 px-4 py-2 text-[10px] font-medium tracking-wide text-white/20 active:text-white/40"
      >
        Reset progress
      </button>
      <div className="h-1" />
    </div>
  )
}
