/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        panel: '#141416',
        panel2: '#1c1c20',
        line: '#28282e',
        brand: '#bef264', // lime — primary accent
        danger: '#fb7185', // rose — wrong / lives
        gold: '#facc15',
        // chapter accents
        ch_hydrocarbons: '#34d399',
        ch_haloalkanes: '#c084fc',
        ch_alcohols: '#fbbf24',
        ch_aldehydes: '#60a5fa',
        ch_carboxylic: '#fb7185',
        ch_amines: '#2dd4bf',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        label: '0.18em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 0.8, 0.28, 1)',
      },
    },
  },
  plugins: [],
}
