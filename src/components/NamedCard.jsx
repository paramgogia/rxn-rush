import { chapterByKey } from '../data/chapters'
import Formula from './Formula'

// A 3D flip card for a named reaction. `flipped` rotates to the back.
// `locked` shows a greyed-out silhouette (for the deck).
export default function NamedCard({ card, flipped = false, locked = false, height = 200 }) {
  const ch = chapterByKey(card.chapter)
  const color = ch?.color || '#888'

  if (locked) {
    return (
      <div className="card-3d w-full" style={{ height }} aria-label="Locked card">
        <div className="card-face flex flex-col items-center justify-center border border-dashed border-white/10 bg-white/[0.02]">
          <span className="text-2xl opacity-25">🔒</span>
          <span className="mt-1.5 text-2xl font-black tracking-tight text-white/15">???</span>
          <span className="mt-1 eyebrow !text-white/15">{ch?.short}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="card-3d w-full" style={{ height }}>
      <div className={`card-3d-inner ${flipped ? 'flipped' : ''}`}>
        {/* FRONT */}
        <div
          className="card-face flex flex-col justify-between p-3.5"
          style={{
            background: `linear-gradient(160deg, ${color}1f 0%, #0d0d0f 62%)`,
            boxShadow: `inset 0 0 0 1px ${color}55`,
          }}
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow" style={{ color: `${color}` }}>
              {ch?.short}
            </span>
            <span className="text-sm opacity-80">{ch?.emoji}</span>
          </div>
          <div>
            <h3 className="text-[17px] font-black leading-[1.1] tracking-tight text-white">
              {card.name}
            </h3>
            <Formula className="mt-2 block text-[11.5px] leading-snug text-white/60 break-words">
              {card.equation}
            </Formula>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
            <span className="text-[8.5px] font-bold uppercase tracking-[0.22em] text-white/35">
              RXN Rush
            </span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="card-face card-back flex flex-col p-3.5"
          style={{
            background: `linear-gradient(160deg, #0d0d0f 30%, ${color}14 100%)`,
            boxShadow: `inset 0 0 0 1px ${color}55`,
          }}
        >
          <h3 className="text-[13px] font-black leading-tight tracking-tight" style={{ color }}>
            {card.name}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-[10.5px] text-white/55">
            <span>{card.scientist}</span>
            <span className="text-white/25">·</span>
            <span className="tnum">{card.year}</span>
          </div>
          <p className="mt-2 flex-1 text-[11px] leading-snug text-white/75">{card.fact}</p>
          <Formula className="mt-2 block rounded-lg bg-black/40 px-2 py-1.5 text-[10px] leading-snug text-white/60 break-words">
            {card.equation}
          </Formula>
        </div>
      </div>
    </div>
  )
}
