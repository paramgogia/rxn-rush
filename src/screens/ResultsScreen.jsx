import { motion } from 'framer-motion'
import { useGame, computeSessionStats } from '../store/gameStore'
import { chapterByKey, CHAPTER_ORDER, UNLOCK_THRESHOLD } from '../data/chapters'
import { namedReactionById } from '../data/namedReactions'
import NamedCard from '../components/NamedCard'

export default function ResultsScreen() {
  const sessionAnswers = useGame((s) => s.sessionAnswers)
  const sessionCoins = useGame((s) => s.sessionCoins)
  const sessionNewCards = useGame((s) => s.sessionNewCards)
  const chapter = useGame((s) => s.currentChapter)
  const maxCombo = useGame((s) => s.maxCombo)
  const unlocked = useGame((s) => s.unlockedChapters)
  const replaySession = useGame((s) => s.replaySession)
  const openChapterSelect = useGame((s) => s.openChapterSelect)
  const goHome = useGame((s) => s.goHome)

  const stats = computeSessionStats({ sessionAnswers, sessionCoins })
  const ch = chapterByKey(chapter)
  const passed = stats.accuracy >= UNLOCK_THRESHOLD
  const nextChapter = chapterByKey(CHAPTER_ORDER[CHAPTER_ORDER.indexOf(chapter) + 1])
  const justUnlockedNext = passed && nextChapter && unlocked.includes(nextChapter.key)

  let weakText = null
  if (stats.weakSpot) {
    const named = namedReactionById(stats.weakSpot)
    const name = named?.name || stats.weakSpot
    weakText = `You missed “${name}” most often — worth another run.`
  }

  const ring = passed ? '#bef264' : stats.accuracy >= 40 ? '#facc15' : '#fb7185'

  return (
    <div className="screen">
      <motion.p
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 text-center eyebrow"
      >
        {ch?.label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-[22px] font-black tracking-tight"
      >
        Session Complete
      </motion.h2>

      {/* accuracy ring */}
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 17 }}
        className="mx-auto mt-7 flex h-36 w-36 items-center justify-center rounded-full"
        style={{ background: `conic-gradient(${ring} ${stats.accuracy * 3.6}deg, #1c1c20 0deg)` }}
      >
        <div className="flex h-[124px] w-[124px] flex-col items-center justify-center rounded-full bg-ink">
          <span className="text-[40px] font-black leading-none tnum" style={{ color: ring }}>
            {stats.accuracy}
            <span className="text-xl">%</span>
          </span>
          <span className="mt-1 eyebrow">accuracy</span>
        </div>
      </motion.div>

      {/* stat row */}
      <div className="mt-7 grid grid-cols-3 gap-2.5">
        <Stat label="Correct" value={`${stats.correct}/${stats.total}`} />
        <Stat label="Coins" value={`+${stats.coins}`} accent="#facc15" />
        <Stat label="Best run" value={`🔥${maxCombo}`} />
      </div>

      {justUnlockedNext && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-3.5 rounded-2xl bg-brand/[0.1] p-3 text-center"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(190,242,100,0.3)' }}
        >
          <p className="text-[13px] font-extrabold text-brand">🔓 Unlocked · {nextChapter.label}</p>
        </motion.div>
      )}

      {weakText && (
        <div className="mt-3.5 rounded-2xl bg-panel2 p-3.5 hairline">
          <p className="eyebrow !text-amber-400/70">Weak spot</p>
          <p className="mt-1 text-[12.5px] text-white/75">{weakText}</p>
        </div>
      )}

      {sessionNewCards.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 eyebrow">New cards · {sessionNewCards.length}</p>
          <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
            {sessionNewCards.map((id) => (
              <div key={id} className="w-[108px] shrink-0">
                <NamedCard card={namedReactionById(id)} height={146} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 min-h-[20px]" />

      {/* actions */}
      <div className="mt-6 space-y-2.5">
        <button
          onClick={replaySession}
          className="min-h-[52px] w-full rounded-2xl bg-brand text-[15px] font-extrabold text-ink active:scale-[0.98] transition-transform"
        >
          Play Again
        </button>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={openChapterSelect}
            className="min-h-[48px] rounded-2xl bg-panel2 text-[13px] font-bold text-white hairline active:scale-[0.98]"
          >
            Change Chapter
          </button>
          <button
            onClick={goHome}
            className="min-h-[48px] rounded-2xl bg-panel2 text-[13px] font-bold text-white hairline active:scale-[0.98]"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, accent = '#ffffff' }) {
  return (
    <div className="rounded-2xl bg-panel2 p-3 text-center hairline">
      <p className="text-[17px] font-black tnum leading-none" style={{ color: accent }}>
        {value}
      </p>
      <p className="mt-1.5 eyebrow">{label}</p>
    </div>
  )
}
