import { useState } from 'react'
import NamedCard from './NamedCard'

// Deck tile: tap a collected card to flip it; locked cards show a silhouette.
export default function ReactionCard({ card, collected }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      type="button"
      disabled={!collected}
      onClick={() => setFlipped((f) => !f)}
      className="block w-full text-left"
    >
      <NamedCard card={card} flipped={flipped} locked={!collected} height={172} />
    </button>
  )
}
