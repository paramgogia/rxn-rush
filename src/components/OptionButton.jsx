import { motion } from 'framer-motion'
import Formula from './Formula'

// state: 'idle' | 'correct' | 'wrong' | 'reveal' (the right answer when user missed)
export default function OptionButton({ option, onSelect, disabled, state = 'idle' }) {
  const variants = {
    idle: { x: 0, scale: 1 },
    correct: { scale: [1, 1.05, 1], transition: { duration: 0.4 } },
    wrong: { x: [-7, 7, -6, 6, 0], transition: { duration: 0.42 } },
    reveal: { scale: [1, 1.02, 1], transition: { duration: 0.4 } },
  }

  const styleByState = {
    idle: 'border-line bg-panel2 active:bg-panel',
    correct: 'border-brand bg-brand/[0.14] shadow-[0_0_28px_-6px_rgba(190,242,100,0.6)]',
    wrong: 'border-danger bg-danger/[0.12]',
    reveal: 'border-brand/60 bg-brand/[0.08]',
  }

  const valueColor =
    state === 'correct' || state === 'reveal'
      ? 'text-brand'
      : state === 'wrong'
        ? 'text-danger'
        : 'text-white'

  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      variants={variants}
      animate={state}
      whileTap={state === 'idle' ? { scale: 0.97 } : undefined}
      className={`flex min-h-[62px] w-full flex-col items-center justify-center gap-1 rounded-2xl border px-3 py-2.5 text-center transition-colors duration-200 ${styleByState[state]}`}
    >
      <Formula className={`text-[15px] font-bold leading-tight break-words ${valueColor}`}>
        {option.value}
      </Formula>
      <span className="text-[10.5px] font-medium leading-tight text-white/45">{option.label}</span>
    </motion.button>
  )
}
