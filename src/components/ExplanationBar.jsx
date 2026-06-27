import { motion, AnimatePresence } from 'framer-motion'
import { namedReactionById } from '../data/namedReactions'

// Slides up from the bottom after each answer.
export default function ExplanationBar({ show, isCorrect, reaction }) {
  const named = reaction ? namedReactionById(reaction.namedReactionId) : null
  const namedLabel = named?.name || reaction?.namedReactionText

  return (
    <AnimatePresence>
      {show && reaction && (
        <motion.div
          key="exp"
          initial={{ y: 130, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 130, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 32 }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-3.5 pb-3.5"
          style={{ paddingBottom: 'max(0.9rem, env(safe-area-inset-bottom))' }}
        >
          <div
            className={`rounded-2xl border p-3.5 backdrop-blur-xl ${
              isCorrect
                ? 'border-brand/30 bg-[#10160a]/85'
                : 'border-danger/30 bg-[#1a0d10]/85'
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                  isCorrect ? 'bg-brand text-ink' : 'bg-danger text-ink'
                }`}
              >
                {isCorrect ? '✓' : '✕'}
              </span>
              <div className="min-w-0">
                {namedLabel && (
                  <p
                    className={`mb-0.5 text-[11px] font-extrabold uppercase tracking-wide ${
                      isCorrect ? 'text-brand' : 'text-danger'
                    }`}
                  >
                    {namedLabel}
                  </p>
                )}
                <p className="text-[12.5px] leading-snug text-white/80">{reaction.explanation}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
