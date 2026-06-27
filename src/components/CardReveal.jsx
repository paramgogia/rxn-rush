import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import NamedCard from './NamedCard'
import { namedReactionById } from '../data/namedReactions'
import { chapterByKey } from '../data/chapters'
import { sfx } from '../utils/sound'

// Full-screen overlay shown when combo hits a multiple of 5.
// The card has already been claimed by the store; `reveal` carries isNew/bonus.
export default function CardReveal({ reveal, onContinue }) {
  const card = namedReactionById(reveal.cardId)
  const [flipped, setFlipped] = useState(false)
  const ch = card ? chapterByKey(card.chapter) : null

  useEffect(() => {
    sfx.reveal()
    const t = setTimeout(() => setFlipped(true), 850)
    return () => clearTimeout(t)
  }, [])

  if (!card) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/80 px-6 backdrop-blur-md"
    >
      <motion.p
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-1 text-center text-xs font-bold uppercase tracking-[0.3em]"
        style={{ color: ch?.color }}
      >
        Named Reaction Unlocked!
      </motion.p>

      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotateY: -40 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        className="w-full max-w-[260px]"
      >
        <NamedCard card={card} flipped={flipped} height={300} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-5 text-center text-sm font-bold text-white"
      >
        {reveal.isNew ? (
          <>🃏 Added to your deck!</>
        ) : (
          <>Already in deck — <span className="text-gold">+{reveal.bonus} bonus coins!</span></>
        )}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={onContinue}
        className="mt-5 min-h-[48px] rounded-full bg-brand px-12 text-sm font-extrabold text-ink active:scale-95"
      >
        Continue
      </motion.button>
    </motion.div>
  )
}
