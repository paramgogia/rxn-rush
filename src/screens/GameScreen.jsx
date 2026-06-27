import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { chapterByKey } from '../data/chapters'
import TimerBar from '../components/TimerBar'
import OptionButton from '../components/OptionButton'
import ComboIndicator from '../components/ComboIndicator'
import LivesDisplay from '../components/LivesDisplay'
import ExplanationBar from '../components/ExplanationBar'
import CardReveal from '../components/CardReveal'
import Formula from '../components/Formula'
import { sfx } from '../utils/sound'

const TIME_LIMIT = 10000
const ADVANCE_DELAY = 1700

export default function GameScreen() {
  const coins = useGame((s) => s.coins)
  const lives = useGame((s) => s.lives)
  const combo = useGame((s) => s.combo)
  const chapter = useGame((s) => s.currentChapter)
  const questions = useGame((s) => s.sessionQuestions)
  const index = useGame((s) => s.currentQuestionIndex)
  const reveal = useGame((s) => s.reveal)
  const answerQuestion = useGame((s) => s.answerQuestion)
  const nextQuestion = useGame((s) => s.nextQuestion)
  const clearReveal = useGame((s) => s.clearReveal)
  const goHome = useGame((s) => s.goHome)

  const ch = chapterByKey(chapter)
  const current = questions[index]

  const [phase, setPhase] = useState('answering') // answering | answered
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [lastCorrect, setLastCorrect] = useState(false)
  const [coinPop, setCoinPop] = useState(null)

  const startRef = useRef(0)
  const timeoutRef = useRef(null)
  const advanceRef = useRef(null)
  const answeredRef = useRef(false) // synchronous lock against double-tap

  useEffect(() => {
    setPhase('answering')
    setSelectedIndex(null)
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
  }, [index])

  if (!current) return null

  function handleAnswer(optIndex) {
    if (answeredRef.current) return // guards against rapid double-taps
    answeredRef.current = true
    clearTimeout(timeoutRef.current)

    const opt = optIndex >= 0 ? current.options[optIndex] : null
    const isCorrect = !!opt?.correct
    const timeMs = Math.min(Date.now() - startRef.current, TIME_LIMIT)

    setSelectedIndex(optIndex)
    setLastCorrect(isCorrect)
    setPhase('answered')

    answerQuestion({ reaction: current.reaction, isCorrect, timeMs })
    const result = useGame.getState().lastResult
    const livesLeft = useGame.getState().lives
    const willReveal = !!useGame.getState().reveal

    if (isCorrect) {
      sfx.correct()
      if (result?.coins) setCoinPop({ amount: result.coins })
    } else {
      sfx.wrong()
    }

    if (willReveal) return

    advanceRef.current = setTimeout(() => {
      if (livesLeft <= 0) sfx.gameover()
      nextQuestion()
    }, ADVANCE_DELAY)
  }

  function handleContinueFromReveal() {
    clearReveal()
    const livesLeft = useGame.getState().lives
    if (livesLeft <= 0) sfx.gameover()
    nextQuestion()
  }

  function optionState(i) {
    if (phase !== 'answered') return 'idle'
    const opt = current.options[i]
    if (i === selectedIndex) return opt.correct ? 'correct' : 'wrong'
    if (opt.correct) return 'reveal'
    return 'idle'
  }

  return (
    <div className="screen relative">
      {/* header */}
      <div className="flex items-center justify-between">
        <button
          onClick={goHome}
          className="flex items-center gap-1 text-[13px] font-bold active:scale-95"
        >
          <span className="text-base text-white/50">‹</span>
          <span style={{ color: ch?.color }}>{ch?.short}</span>
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

      {/* progress + combo */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10.5px] font-semibold tnum text-white/35">
          {String(index + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
        </span>
        <ComboIndicator combo={combo} />
      </div>

      {/* timer */}
      <div className="mt-2">
        <TimerBar duration={TIME_LIMIT} frozen={phase === 'answered'} qKey={index} />
      </div>

      {/* play area — reaction + options centered as one unit */}
      <div className="flex flex-1 flex-col justify-center py-4">
        {/* reaction hero */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-3xl bg-panel p-6 hairline"
        >
          <p className="eyebrow">Predict the product</p>
          <Formula className="mt-3 block text-[26px] font-bold leading-[1.25] tracking-tight text-white break-words">
            {current.reaction.reactant}
          </Formula>
          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-lg bg-black/30 px-2.5 py-1.5">
            <span
              className="text-[9px] font-bold uppercase tracking-label"
              style={{ color: ch?.color }}
            >
              Conditions
            </span>
            <span className="text-[12px] text-white/70">{current.reaction.conditions}</span>
          </div>
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

        {/* options */}
        <div className="mt-7 grid grid-cols-2 gap-2.5">
          {current.options.map((opt, i) => (
            <OptionButton
              key={i}
              option={opt}
              disabled={phase === 'answered'}
              state={optionState(i)}
              onSelect={() => handleAnswer(i)}
            />
          ))}
        </div>
      </div>

      <ExplanationBar
        show={phase === 'answered'}
        isCorrect={lastCorrect}
        reaction={current.reaction}
      />

      <AnimatePresence>
        {reveal && <CardReveal reveal={reveal} onContinue={handleContinueFromReveal} />}
      </AnimatePresence>
    </div>
  )
}
