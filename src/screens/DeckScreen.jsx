import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGame } from '../store/gameStore'
import { NAMED_REACTIONS, TOTAL_CARDS } from '../data/namedReactions'
import { CHAPTERS } from '../data/chapters'
import ReactionCard from '../components/ReactionCard'

export default function DeckScreen() {
  const collected = useGame((s) => s.collectedCards)
  const goHome = useGame((s) => s.goHome)
  const [filter, setFilter] = useState('all')

  const owned = new Set(collected)
  const filtered =
    filter === 'all' ? NAMED_REACTIONS : NAMED_REACTIONS.filter((n) => n.chapter === filter)

  const filters = [{ key: 'all', short: 'All', color: '#bef264' }, ...CHAPTERS]

  return (
    <div className="screen">
      {/* header */}
      <div className="flex items-center gap-3">
        <button
          onClick={goHome}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-lg hairline active:scale-90"
        >
          ‹
        </button>
        <div className="flex-1">
          <h2 className="text-[19px] font-black tracking-tight">My Deck</h2>
          <p className="text-[11.5px] text-white/45">Tap a card to flip it</p>
        </div>
        <div className="rounded-full bg-brand/[0.12] px-3 py-1.5 text-[13px] font-extrabold tnum text-brand hairline !border-brand/20">
          {collected.length} / {TOTAL_CARDS}
        </div>
      </div>

      {/* progress */}
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          className="h-full rounded-full bg-brand"
          initial={{ width: 0 }}
          animate={{ width: `${(collected.length / TOTAL_CARDS) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      {/* filter row */}
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11.5px] font-bold transition-colors ${
                active ? 'text-ink' : 'bg-panel2 text-white/55 hairline'
              }`}
              style={active ? { background: f.color } : undefined}
            >
              {f.short}
            </button>
          )
        })}
      </div>

      {/* grid */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {filtered.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(i * 0.025, 0.35) }}
          >
            <ReactionCard card={card} collected={owned.has(card.id)} />
          </motion.div>
        ))}
      </div>
      <div className="h-2" />
    </div>
  )
}
