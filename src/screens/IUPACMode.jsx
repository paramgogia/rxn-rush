import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { buildIupacRound } from '../data/iupac'
import TimerBar from '../components/TimerBar'
import LivesDisplay from '../components/LivesDisplay'
import ComboIndicator from '../components/ComboIndicator'
import Formula from '../components/Formula'
import { sfx } from '../utils/sound'

const TIME_LIMIT = 20000 // names take longer to read than formulas
const ADVANCE_DELAY = 2100
const ROUND = 10
const START_LIVES = 3
const ACCENT = '#c084fc' // a distinct purple for the nomenclature mode

function coinsFor(timeMs, comboAfter) {
  let base
  if (timeMs <= 7000) base = 150
  else if (timeMs <= 14000) base = 100
  else base = 70
  return comboAfter >= 5 ? base * 2 : base
}

export default function IUPACMode() {
  const awardCoins = useGame((s) => s.awardCoins)
  const coins = useGame((s) => s.coins)
  const goHome = useGame((s) => s.goHome)

  const [round, setRound] = useState(() => buildIupacRound(ROUND))
  const [index, setIndex] = useState(0)
  const [lives, setLives] = useState(START_LIVES)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [earned, setEarned] = useState(0)
  const [status, setStatus] = useState('playing') // playing | over

  const [phase, setPhase] = useState('answering') // answering | answered
  const [selected, setSelected] = useState(null)
  const [lastCorrect, setLastCorrect] = useState(false)
  const [coinPop, setCoinPop] = useState(null)

  const startRef = useRef(0)
  const timeoutRef = useRef(null)
  const advanceRef = useRef(null)
  const answeredRef = useRef(false)

  const current = round[index]

  useEffect(() => {
    if (status !== 'playing') return
    setPhase('answering')
    setSelected(null)
    setCoinPop(null)
    answeredRef.current = false
    startRef.current = Date.now()
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => handleAnswer(-1), TIME_LIMIT)
    return () => {
      clearTimeout(timeoutRef.current)
      clearTimeout(advanceRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, status])

  function startRound() {
    setRound(buildIupacRound(ROUND))
    setIndex(0)
    setLives(START_LIVES)
    setCombo(0)
    setMaxCombo(0)
    setCorrectCount(0)
    setEarned(0)
    setStatus('playing')
  }

  function handleAnswer(optIndex) {
    if (answeredRef.current) return
    answeredRef.current = true
    clearTimeout(timeoutRef.current)

    const opt = optIndex >= 0 ? current.options[optIndex] : null
    const isCorrect = !!opt?.correct
    const timeMs = Math.min(Date.now() - startRef.current, TIME_LIMIT)

    setSelected(optIndex)
    setLastCorrect(isCorrect)
    setPhase('answered')

    let nextCombo = combo
    let nextLives = lives
    if (isCorrect) {
      nextCombo = combo + 1
      const c = coinsFor(timeMs, nextCombo)
      awardCoins(c)
      setEarned((e) => e + c)
      setCorrectCount((n) => n + 1)
      setCoinPop({ amount: c })
      sfx.correct()
    } else {
      nextCombo = 0
      nextLives = lives - 1
      sfx.wrong()
    }
    setCombo(nextCombo)
    setMaxCombo((m) => Math.max(m, nextCombo))
    setLives(nextLives)

    advanceRef.current = setTimeout(() => {
      const lastQuestion = index + 1 >= round.length
      if (nextLives <= 0 || lastQuestion) {
        if (nextLives <= 0) sfx.gameover()
        setStatus('over')
      } else {
        setIndex((i) => i + 1)
      }
    }, ADVANCE_DELAY)
  }

  function optionState(i) {
    if (phase !== 'answered') return 'idle'
    const opt = current.options[i]
    if (i === selected) return opt.correct ? 'correct' : 'wrong'
    if (opt.correct) return 'reveal'
    return 'idle'
  }

  // ---------- end screen ----------
  if (status === 'over') {
    const total = correctCount + (START_LIVES - lives) // attempted ≈ correct + wrong
    const attempted = index + 1
    const accuracy = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0
    const ring = accuracy >= 70 ? '#bef264' : accuracy >= 40 ? '#facc15' : '#fb7185'
    return (
      <div className="screen">
        <p className="mt-2 text-center eyebrow" style={{ color: ACCENT }}>
          IUPAC Challenge
        </p>
        <h2 className="text-center text-[22px] font-black tracking-tight">Round Complete</h2>
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 17 }}
          className="mx-auto mt-7 flex h-36 w-36 items-center justify-center rounded-full"
          style={{ background: `conic-gradient(${ring} ${accuracy * 3.6}deg, #1c1c20 0deg)` }}
        >
          <div className="flex h-[124px] w-[124px] flex-col items-center justify-center rounded-full bg-ink">
            <span className="text-[40px] font-black leading-none tnum" style={{ color: ring }}>
              {accuracy}
              <span className="text-xl">%</span>
            </span>
            <span className="mt-1 eyebrow">accuracy</span>
          </div>
        </motion.div>
        <div className="mt-7 grid grid-cols-3 gap-2.5">
          <Stat label="Correct" value={`${correctCount}/${attempted}`} />
          <Stat label="Coins" value={`+${earned}`} accent="#facc15" />
          <Stat label="Best run" value={`🔥${maxCombo}`} />
        </div>
        <div className="flex-1 min-h-[20px]" />
        <div className="mt-6 space-y-2.5">
          <button
            onClick={startRound}
            className="min-h-[52px] w-full rounded-2xl text-[15px] font-extrabold text-ink active:scale-[0.98]"
            style={{ background: ACCENT }}
          >
            Play Again
          </button>
          <button
            onClick={goHome}
            className="min-h-[48px] w-full rounded-2xl bg-panel2 text-[13px] font-bold text-white hairline active:scale-[0.98]"
          >
            Home
          </button>
        </div>
      </div>
    )
  }

  if (!current) return null

  // ---------- play ----------
  return (
    <div className="screen relative">
      {/* header */}
      <div className="flex items-center justify-between">
        <button
          onClick={goHome}
          className="flex items-center gap-1 text-[13px] font-bold active:scale-95"
        >
          <span className="text-base text-white/50">‹</span>
          <span style={{ color: ACCENT }}>IUPAC</span>
        </button>
        <div className="flex items-center gap-3">
          <LivesDisplay lives={lives} />
          <div className="flex items-center gap-1.5 rounded-full bg-gold/[0.12] px-2.5 py-1 hairline !border-gold/20">
            <span className="text-[11px]">💰</span>
            <motion.span
              key={coins}
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              className="text-[12.5px] font-extrabold tnum text-gold"
            >
              {coins.toLocaleString()}
            </motion.span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10.5px] font-semibold tnum text-white/35">
          {String(index + 1).padStart(2, '0')} / {String(round.length).padStart(2, '0')}
        </span>
        <ComboIndicator combo={combo} />
      </div>

      <div className="mt-2">
        <TimerBar duration={TIME_LIMIT} frozen={phase === 'answered'} qKey={index} />
      </div>

      {/* structure prompt */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 rounded-3xl bg-panel p-6 hairline"
      >
        <p className="eyebrow">Give the IUPAC name</p>
        <Formula className="mt-3 block text-[22px] font-bold leading-[1.3] tracking-tight text-white break-words">
          {current.q.structure}
        </Formula>
        {current.q.note && (
          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-lg bg-black/30 px-2.5 py-1.5">
            <span className="text-[9px] font-bold uppercase tracking-label" style={{ color: ACCENT }}>
              Hint
            </span>
            <span className="text-[12px] text-white/65">{current.q.note}</span>
          </div>
        )}
      </motion.div>

      {/* coin popup */}
      <div className="relative h-0">
        <AnimatePresence>
          {coinPop && (
            <motion.div
              key="pop"
              initial={{ y: 4, opacity: 1, scale: 0.9 }}
              animate={{ y: -64, opacity: 0, scale: 1.35 }}
              transition={{ duration: 1 }}
              className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 text-lg font-black tnum text-gold"
            >
              +{coinPop.amount}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* name options (full-width rows) */}
      <div className="mt-5 space-y-2.5">
        {current.options.map((opt, i) => (
          <NameButton
            key={i}
            name={opt.name}
            disabled={phase === 'answered'}
            state={optionState(i)}
            onSelect={() => handleAnswer(i)}
          />
        ))}
      </div>

      <div className="flex-1 min-h-[8px]" />

      {/* explanation */}
      <AnimatePresence>
        {phase === 'answered' && (
          <motion.div
            key="exp"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className={`mt-3 rounded-2xl border p-3.5 ${
              lastCorrect ? 'border-brand/30 bg-[#10160a]/80' : 'border-danger/30 bg-[#1a0d10]/80'
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                  lastCorrect ? 'bg-brand text-ink' : 'bg-danger text-ink'
                }`}
              >
                {lastCorrect ? '✓' : '✕'}
              </span>
              <div className="min-w-0">
                <p
                  className={`mb-0.5 text-[12px] font-extrabold ${lastCorrect ? 'text-brand' : 'text-danger'}`}
                >
                  {current.q.correctName}
                </p>
                <p className="text-[12px] leading-snug text-white/80">{current.q.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function NameButton({ name, onSelect, disabled, state }) {
  const variants = {
    idle: { x: 0, scale: 1 },
    correct: { scale: [1, 1.03, 1], transition: { duration: 0.4 } },
    wrong: { x: [-7, 7, -6, 6, 0], transition: { duration: 0.42 } },
    reveal: { scale: [1, 1.02, 1], transition: { duration: 0.4 } },
  }
  const cls = {
    idle: 'border-line bg-panel2 text-white active:bg-panel',
    correct: 'border-brand bg-brand/[0.14] text-brand shadow-[0_0_24px_-6px_rgba(190,242,100,0.55)]',
    wrong: 'border-danger bg-danger/[0.12] text-danger',
    reveal: 'border-brand/60 bg-brand/[0.08] text-brand',
  }
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      variants={variants}
      animate={state}
      whileTap={state === 'idle' ? { scale: 0.98 } : undefined}
      className={`flex min-h-[52px] w-full items-center justify-center rounded-2xl border px-4 py-2.5 text-center text-[14.5px] font-bold leading-tight transition-colors duration-200 ${cls[state]}`}
    >
      {name}
    </motion.button>
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
