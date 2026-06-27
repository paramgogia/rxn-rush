import { motion } from 'framer-motion'

function Heart({ filled }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20.5S3.5 15 3.5 8.9C3.5 6.2 5.6 4.3 8.1 4.3c1.7 0 3.1.9 3.9 2.3.8-1.4 2.2-2.3 3.9-2.3 2.5 0 4.6 1.9 4.6 4.6C20.5 15 12 20.5 12 20.5z"
        fill={filled ? '#fb7185' : 'none'}
        stroke={filled ? 'none' : 'rgba(255,255,255,0.18)'}
        strokeWidth="1.8"
      />
    </svg>
  )
}

export default function LivesDisplay({ lives, max = 3 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const alive = i < lives
        return (
          <motion.span
            key={i}
            animate={alive ? { scale: 1 } : { scale: [1.5, 0.9, 1] }}
            transition={{ duration: 0.35 }}
            className="leading-none"
          >
            <Heart filled={alive} />
          </motion.span>
        )
      })}
    </div>
  )
}
