import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGame } from './store/gameStore'
import { setMuted } from './utils/sound'
import HomeScreen from './screens/HomeScreen'
import ChapterSelect from './screens/ChapterSelect'
import GameScreen from './screens/GameScreen'
import ResultsScreen from './screens/ResultsScreen'
import DeckScreen from './screens/DeckScreen'
import ChainMode from './screens/ChainMode'
import IUPACMode from './screens/IUPACMode'

const SCREENS = {
  home: HomeScreen,
  chapter_select: ChapterSelect,
  game: GameScreen,
  results: ResultsScreen,
  deck: DeckScreen,
  chain: ChainMode,
  iupac: IUPACMode,
}

export default function App() {
  const screen = useGame((s) => s.screen)
  const muted = useGame((s) => s.muted)

  // keep the sound engine in sync with the persisted mute flag
  useEffect(() => {
    setMuted(muted)
  }, [muted])

  const Screen = SCREENS[screen] || HomeScreen

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.22, 0.8, 0.28, 1] }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
