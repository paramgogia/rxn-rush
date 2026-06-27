import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { CHAINS } from '../data/chains'
import Formula from '../components/Formula'
import { sfx } from '../utils/sound'

const COINS_PER_STEP = 80
const COMPLETE_BONUS = 300

export default function ChainMode() {
  const goHome = useGame((s) => s.goHome)
  const [chain, setChain] = useState(null)

  if (!chain) return <ChainList onPick={setChain} onBack={goHome} />
  return <ChainPlay chain={chain} onExit={() => setChain(null)} onHome={goHome} />
}

function ChainList({ onPick, onBack }) {
  return (
    <div className="screen">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-lg hairline active:scale-90"
        >
          ‹
        </button>
        <div>
          <h2 className="text-[19px] font-black tracking-tight">Chain Reaction</h2>
          <p className="text-[11.5px] text-white/45">Pick the reagent for every step</p>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {CHAINS.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            onClick={() => {
              sfx.tap()
              onPick(c)
            }}
            className="block w-full rounded-2xl p-4 text-left active:scale-[0.98] transition-transform"
            style={{ boxShadow: `inset 0 0 0 1px ${c.accent}40`, background: `${c.accent}12` }}
          >
            <p className="text-[15px] font-bold text-white">{c.title}</p>
            <div className="mt-2 flex items-center gap-2 text-[12.5px]">
              <Formula className="text-white/80">{c.start.formula}</Formula>
              <span className="text-white/35">→ ··· →</span>
              <Formula className="text-white/80">{c.target.formula}</Formula>
            </div>
            <p className="mt-1.5 text-[10.5px] tnum text-white/40">{c.steps.length} steps</p>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

function ChainPlay({ chain, onExit, onHome }) {
  const awardCoins = useGame((s) => s.awardCoins)
  const [stepIndex, setStepIndex] = useState(0)
  const [status, setStatus] = useState('playing') // playing | broke | done
  const [picked, setPicked] = useState(null)
  const lockRef = useRef(false) // synchronous lock against double-tap

  const step = chain.steps[stepIndex]
  const currentMol = stepIndex === 0 ? chain.start : chain.steps[stepIndex - 1].to

  function choose(opt) {
    if (lockRef.current || status !== 'playing') return
    lockRef.current = true
    setPicked(opt)
    if (opt === step.correct) {
      sfx.correct()
      awardCoins(COINS_PER_STEP)
      setTimeout(() => {
        const next = stepIndex + 1
        if (next >= chain.steps.length) {
          awardCoins(COMPLETE_BONUS)
          sfx.reveal()
          setStatus('done')
        } else {
          setStepIndex(next)
          setPicked(null)
          lockRef.current = false
        }
      }, 850)
    } else {
      sfx.wrong()
      setStatus('broke')
    }
  }

  function retry() {
    setStepIndex(0)
    setStatus('playing')
    setPicked(null)
    lockRef.current = false
  }

  return (
    <div className="screen">
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center gap-1 text-[13px] font-bold text-white/60 active:scale-95"
        >
          <span className="text-base">‹</span> Chains
        </button>
        <span className="text-[13px] font-extrabold" style={{ color: chain.accent }}>
          {chain.title}
        </span>
      </div>

      {/* molecule chain */}
      <div className="mt-5 flex flex-col items-center">
        <MoleculeNode
          mol={chain.start}
          state={stepIndex > 0 || status === 'done' ? 'done' : 'current'}
          accent={chain.accent}
          top
        />
        {chain.steps.map((s, i) => {
          let st = 'future'
          if (status === 'done') st = 'done'
          else if (i < stepIndex) st = 'done'
          else if (i === stepIndex) st = 'next'
          return (
            <div key={i} className="flex w-full flex-col items-center">
              <Connector
                active={i < stepIndex || status === 'done'}
                broke={status === 'broke' && i === stepIndex}
                accent={chain.accent}
              />
              <MoleculeNode
                mol={s.to}
                state={st}
                accent={chain.accent}
                target={i === chain.steps.length - 1}
              />
            </div>
          )
        })}
      </div>

      <div className="flex-1 min-h-[12px]" />

      <AnimatePresence mode="wait">
        {status === 'playing' && (
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            className="mt-4"
          >
            <p className="text-center text-[12.5px] text-white/55">
              Reagent for{' '}
              <Formula className="font-bold text-white">{currentMol.formula}</Formula> →{' '}
              <Formula className="font-bold text-white">{step.to.formula}</Formula>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {step.options.map((opt) => {
                const isPicked = picked === opt
                const isCorrect = opt === step.correct
                let cls = 'border-line bg-panel2 text-white active:bg-panel'
                if (picked) {
                  if (isCorrect) cls = 'border-brand bg-brand/[0.14] text-brand'
                  else if (isPicked) cls = 'border-danger bg-danger/[0.12] text-danger'
                  else cls = 'border-line bg-panel2 text-white/40'
                }
                return (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    disabled={!!picked}
                    className={`min-h-[56px] rounded-2xl border px-3 py-2 text-[12.5px] font-bold transition-colors ${cls}`}
                  >
                    <Formula>{opt}</Formula>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}

        {status === 'broke' && (
          <motion.div
            key="broke"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 rounded-2xl bg-danger/[0.08] p-4 text-center"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(251,113,133,0.35)' }}
          >
            <p className="text-[17px] font-black text-danger">Chain broke at step {stepIndex + 1}</p>
            <p className="mt-2 text-[12.5px] text-white/75">
              Correct: <Formula className="font-bold text-brand">{step.correct}</Formula>
            </p>
            <p className="mt-1.5 text-[11.5px] leading-snug text-white/55">{step.explanation}</p>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button
                onClick={onExit}
                className="min-h-[48px] rounded-2xl bg-panel2 text-[13px] font-bold hairline active:scale-95"
              >
                Other chains
              </button>
              <button
                onClick={retry}
                className="min-h-[48px] rounded-2xl bg-brand text-[13px] font-extrabold text-ink active:scale-95"
              >
                Retry
              </button>
            </div>
          </motion.div>
        )}

        {status === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 rounded-2xl p-4 text-center"
            style={{ boxShadow: `inset 0 0 0 1px ${chain.accent}55`, background: `${chain.accent}14` }}
          >
            <p className="text-[17px] font-black" style={{ color: chain.accent }}>
              ✓ Chain complete
            </p>
            <p className="mt-1 text-[12.5px] text-white/70">
              {chain.start.name} → {chain.target.name}
            </p>
            <p className="mt-1.5 text-[15px] font-extrabold tnum text-gold">
              +{chain.steps.length * COINS_PER_STEP + COMPLETE_BONUS} 💰
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <button
                onClick={onExit}
                className="min-h-[48px] rounded-2xl bg-panel2 text-[13px] font-bold hairline active:scale-95"
              >
                More chains
              </button>
              <button
                onClick={onHome}
                className="min-h-[48px] rounded-2xl bg-brand text-[13px] font-extrabold text-ink active:scale-95"
              >
                Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MoleculeNode({ mol, state, accent, top, target }) {
  const isActive = state === 'done' || state === 'current' || state === 'next'
  const dim = state === 'future'
  return (
    <motion.div
      animate={state === 'next' ? { scale: [1, 1.03, 1] } : { scale: 1 }}
      transition={state === 'next' ? { repeat: Infinity, duration: 1.8 } : {}}
      className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5"
      style={{
        boxShadow: `inset 0 0 0 1px ${isActive ? accent + '55' : 'rgba(255,255,255,0.06)'}`,
        background: state === 'next' ? `${accent}10` : 'rgba(255,255,255,0.015)',
      }}
    >
      <div>
        <Formula
          className="text-[15px] font-bold"
          style={{ color: dim ? 'rgba(255,255,255,0.4)' : '#fff' }}
        >
          {mol.formula}
        </Formula>
        <p className="text-[10px] text-white/40">{mol.name}</p>
      </div>
      {top && <span className="eyebrow">start</span>}
      {target && (
        <span className="eyebrow" style={{ color: accent }}>
          target
        </span>
      )}
      {state === 'done' && !top && !target && (
        <span className="text-sm" style={{ color: accent }}>
          ✓
        </span>
      )}
    </motion.div>
  )
}

function Connector({ active, broke, accent }) {
  return (
    <div className="flex h-6 items-center justify-center">
      <div
        className="h-full w-px"
        style={{ background: broke ? '#fb7185' : active ? accent : 'rgba(255,255,255,0.12)' }}
      />
      <span
        className="ml-1 text-[10px]"
        style={{ color: broke ? '#fb7185' : active ? accent : 'rgba(255,255,255,0.25)' }}
      >
        {broke ? '✕' : '↓'}
      </span>
    </div>
  )
}
