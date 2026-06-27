import { useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// Visual-only timer bar. Logic (timeout) lives in GameScreen.
// Shrinks 100% -> 0% over `duration` ms while shifting green -> yellow -> red.
// `frozen` stops it in place (when the player answers).
export default function TimerBar({ duration = 10000, frozen = false, qKey }) {
  const controls = useAnimationControls()
  const secs = duration / 1000

  useEffect(() => {
    // restart for each new question
    controls.set({ width: '100%', backgroundColor: '#34d399' })
    controls.start({
      width: '0%',
      backgroundColor: ['#34d399', '#34d399', '#facc15', '#fb7185'],
      transition: {
        width: { duration: secs, ease: 'linear' },
        backgroundColor: { duration: secs, ease: 'linear', times: [0, 0.4, 0.68, 1] },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qKey])

  useEffect(() => {
    if (frozen) controls.stop()
  }, [frozen, controls])

  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
      <motion.div className="h-full rounded-full" style={{ width: '100%' }} animate={controls} />
    </div>
  )
}
