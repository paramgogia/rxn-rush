import { motion, AnimatePresence } from 'framer-motion'

export default function ComboIndicator({ combo }) {
  const hot = combo >= 3
  return (
    <div className="flex h-6 items-center justify-end">
      <AnimatePresence>
        {combo >= 2 && (
          <motion.div
            key="combo"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tnum ${
              hot ? 'bg-brand/15 text-brand' : 'bg-white/[0.06] text-white/55'
            }`}
          >
            <motion.span
              key={combo}
              initial={{ scale: 1.7 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 420, damping: 12 }}
              style={{ fontSize: `${Math.min(0.8 + combo * 0.06, 1.3)}rem`, lineHeight: 1 }}
            >
              🔥
            </motion.span>
            <span>×{combo}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
