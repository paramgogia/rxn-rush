import { Component } from 'react'

// Catches any render/runtime error and shows a recoverable screen instead of a
// blank white page — so a student can always get back into the game.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('RXN Rush crashed:', error, info)
  }

  reload = () => {
    window.location.reload()
  }

  hardReset = () => {
    try {
      window.localStorage.removeItem('rxn-rush-save-v1')
    } catch {
      /* ignore */
    }
    window.location.reload()
  }

  render() {
    if (this.state.error) {
      return (
        <div className="app-shell">
          <div className="screen items-center justify-center text-center">
            <div className="text-4xl">⚡</div>
            <h1 className="mt-3 text-xl font-black tracking-tight">Something glitched</h1>
            <p className="mt-2 max-w-[260px] text-[13px] text-white/55">
              The game hit an unexpected error. Reloading usually fixes it — your progress is safe.
            </p>
            <button
              onClick={this.reload}
              className="mt-6 min-h-[48px] w-full max-w-[260px] rounded-2xl bg-brand text-[15px] font-extrabold text-ink active:scale-[0.98]"
            >
              Reload
            </button>
            <button
              onClick={this.hardReset}
              className="mt-2.5 min-h-[44px] w-full max-w-[260px] rounded-2xl bg-panel2 text-[12.5px] font-bold text-white/60 hairline active:scale-[0.98]"
            >
              Reset & reload (clears saved progress)
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
