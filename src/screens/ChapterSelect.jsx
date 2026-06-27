import { motion } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { CHAPTERS, UNLOCK_THRESHOLD } from '../data/chapters'
import { reactionsByChapter } from '../data/reactions'
import { NAMED_REACTIONS } from '../data/namedReactions'
import { sfx } from '../utils/sound'

export default function ChapterSelect() {
  const unlocked = useGame((s) => s.unlockedChapters)
  const progress = useGame((s) => s.chapterProgress)
  const startRush = useGame((s) => s.startRush)
  const goHome = useGame((s) => s.goHome)

  return (
    <div className="screen">
      <div className="flex items-center gap-3">
        <button
          onClick={goHome}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-lg hairline active:scale-90"
        >
          ‹
        </button>
        <div>
          <h2 className="text-[19px] font-black tracking-tight">Rush Mode</h2>
          <p className="text-[11.5px] text-white/45">Pick a chapter to begin</p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {CHAPTERS.map((c, i) => {
          const isUnlocked = unlocked.includes(c.key)
          const count = reactionsByChapter(c.key).length
          const best = progress[c.key]?.bestAccuracy || 0
          const cards = NAMED_REACTIONS.filter((n) => n.chapter === c.key)
          return (
            <motion.button
              key={c.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }}
              disabled={!isUnlocked}
              onClick={() => {
                sfx.tap()
                startRush(c.key)
              }}
              className={`block w-full overflow-hidden rounded-2xl p-4 text-left transition-transform ${
                isUnlocked ? 'active:scale-[0.98]' : ''
              }`}
              style={{
                boxShadow: `inset 0 0 0 1px ${isUnlocked ? c.color + '40' : 'rgba(255,255,255,0.06)'}`,
                background: isUnlocked ? c.colorDim : 'rgba(255,255,255,0.015)',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className="text-xl"
                    style={{ filter: isUnlocked ? 'none' : 'grayscale(1) opacity(0.4)' }}
                  >
                    {c.emoji}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`text-[15px] font-bold leading-tight ${isUnlocked ? 'text-white' : 'text-white/40'}`}
                    >
                      {c.label}
                    </p>
                    <p className="text-[11px] tnum text-white/45">
                      {count} reactions · best {best}%
                    </p>
                  </div>
                </div>
                {isUnlocked ? (
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-ink"
                    style={{ background: c.color }}
                  >
                    ▶
                  </span>
                ) : (
                  <span className="text-base opacity-50">🔒</span>
                )}
              </div>

              {isUnlocked ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cards.slice(0, 5).map((n) => (
                    <span
                      key={n.id}
                      className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-medium text-white/60"
                    >
                      {n.name}
                    </span>
                  ))}
                  {cards.length > 5 && (
                    <span className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-medium text-white/40">
                      +{cards.length - 5}
                    </span>
                  )}
                </div>
              ) : (
                <p className="mt-3 text-[11px] text-white/40">
                  Score {UNLOCK_THRESHOLD}% in the previous chapter to unlock
                </p>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
