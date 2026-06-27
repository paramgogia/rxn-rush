// Tiny Web Audio sound engine — synthesises tones so the game needs no asset
// files and stays 100% offline. Howler is in deps but synth is simpler here.

let ctx = null
let muted = true

export function setMuted(v) {
  muted = v
}

function ac() {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  // resume if the browser suspended it before a user gesture
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

// play a single tone
function tone(freq, start, dur, { type = 'sine', gain = 0.18 } = {}) {
  const a = ac()
  if (!a) return
  const t0 = a.currentTime + start
  const osc = a.createOscillator()
  const g = a.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.01)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(a.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.02)
}

function play(seq) {
  if (muted) return
  if (!ac()) return
  seq()
}

export const sfx = {
  correct: () =>
    play(() => {
      tone(880, 0, 0.12, { type: 'triangle' })
      tone(1320, 0.08, 0.14, { type: 'triangle' })
    }),
  wrong: () =>
    play(() => {
      tone(160, 0, 0.22, { type: 'sawtooth', gain: 0.22 })
      tone(110, 0.05, 0.25, { type: 'sawtooth', gain: 0.2 })
    }),
  combo: () =>
    play(() => {
      tone(660, 0, 0.08, { type: 'square', gain: 0.14 })
      tone(880, 0.07, 0.08, { type: 'square', gain: 0.14 })
      tone(1100, 0.14, 0.12, { type: 'square', gain: 0.14 })
    }),
  reveal: () =>
    play(() => {
      tone(1046, 0, 0.1, { type: 'triangle' })
      tone(1318, 0.1, 0.1, { type: 'triangle' })
      tone(1568, 0.2, 0.18, { type: 'triangle' })
      tone(2093, 0.32, 0.2, { type: 'sine', gain: 0.12 })
    }),
  gameover: () =>
    play(() => {
      tone(440, 0, 0.18, { type: 'sawtooth', gain: 0.18 })
      tone(330, 0.16, 0.2, { type: 'sawtooth', gain: 0.18 })
      tone(220, 0.34, 0.3, { type: 'sawtooth', gain: 0.18 })
    }),
  tap: () =>
    play(() => {
      tone(520, 0, 0.05, { type: 'sine', gain: 0.08 })
    }),
}
