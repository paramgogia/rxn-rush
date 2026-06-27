// Chapter metadata — order, labels, and accent colors.
// `unlockThreshold` is the accuracy (%) needed in a chapter to unlock the next.

export const CHAPTERS = [
  {
    key: 'hydrocarbons',
    label: 'Hydrocarbons',
    short: 'Hydrocarbons',
    color: '#34d399',
    colorDim: 'rgba(52,211,153,0.12)',
    emoji: '🛢️',
  },
  {
    key: 'haloalkanes',
    label: 'Haloalkanes & Haloarenes',
    short: 'Haloalkanes',
    color: '#c084fc',
    colorDim: 'rgba(192,132,252,0.12)',
    emoji: '🧪',
  },
  {
    key: 'alcohols',
    label: 'Alcohols, Phenols & Ethers',
    short: 'Alcohols & Phenols',
    color: '#fbbf24',
    colorDim: 'rgba(251,191,36,0.12)',
    emoji: '🍶',
  },
  {
    key: 'aldehydes',
    label: 'Aldehydes & Ketones',
    short: 'Aldehydes & Ketones',
    color: '#60a5fa',
    colorDim: 'rgba(96,165,250,0.12)',
    emoji: '⚗️',
  },
  {
    key: 'carboxylic',
    label: 'Carboxylic Acids',
    short: 'Carboxylic Acids',
    color: '#fb7185',
    colorDim: 'rgba(251,113,133,0.12)',
    emoji: '🧫',
  },
  {
    key: 'amines',
    label: 'Amines',
    short: 'Amines',
    color: '#2dd4bf',
    colorDim: 'rgba(45,212,191,0.12)',
    emoji: '🧬',
  },
]

export const CHAPTER_ORDER = CHAPTERS.map((c) => c.key)

export const chapterByKey = (key) => CHAPTERS.find((c) => c.key === key)

export const UNLOCK_THRESHOLD = 70 // % accuracy in a chapter to unlock the next one
