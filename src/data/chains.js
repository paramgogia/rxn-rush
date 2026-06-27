// Chain Reaction mode — predefined MHT-CET conversion sequences.
// Each step asks the player to pick the correct REAGENT/condition to go from
// the current molecule to the next. Wrong pick → chain breaks.

export const CHAINS = [
  {
    id: 'chain_ethane',
    title: 'Ethane → Acetic Acid',
    accent: '#22c55e',
    start: { formula: 'CH₃CH₃', name: 'Ethane' },
    target: { formula: 'CH₃COOH', name: 'Acetic Acid' },
    steps: [
      {
        to: { formula: 'CH₃CH₂Cl', name: 'Chloroethane' },
        correct: 'Cl₂ / UV light',
        options: ['Cl₂ / UV light', 'HCl (aq)', 'aq. KOH', 'conc. H₂SO₄, Δ'],
        explanation:
          'Free-radical chlorination (Cl₂ + UV) substitutes one H for Cl. Ionic HCl will not add to an alkane.',
      },
      {
        to: { formula: 'CH₃CH₂OH', name: 'Ethanol' },
        correct: 'aq. KOH',
        options: ['aq. KOH', 'alc. KOH, Δ', 'Na metal', 'NaI / acetone'],
        explanation:
          'Aqueous KOH gives OH⁻ as a nucleophile → SN2 substitution to the alcohol. Alcoholic KOH would instead eliminate to ethene.',
      },
      {
        to: { formula: 'CH₃CHO', name: 'Ethanal' },
        correct: 'PCC (mild oxidant)',
        options: ['PCC (mild oxidant)', 'hot KMnO₄ / H⁺', 'LiAlH₄', 'conc. H₂SO₄, 170°C'],
        explanation:
          'A MILD oxidant (PCC / Cu, 573 K) stops the 1° alcohol at the aldehyde. A strong oxidant would overshoot to the acid.',
      },
      {
        to: { formula: 'CH₃COOH', name: 'Acetic Acid' },
        correct: 'acidified KMnO₄, Δ',
        options: ['acidified KMnO₄, Δ', 'NaBH₄', 'Tollens’ (test only)', 'Zn-Hg / HCl'],
        explanation:
          'A strong oxidant (KMnO₄/H⁺) takes the aldehyde up to the carboxylic acid.',
      },
    ],
  },
  {
    id: 'chain_benzene',
    title: 'Benzene → Phenol',
    accent: '#a855f7',
    start: { formula: 'C₆H₆', name: 'Benzene' },
    target: { formula: 'C₆H₅OH', name: 'Phenol' },
    steps: [
      {
        to: { formula: 'C₆H₅NO₂', name: 'Nitrobenzene' },
        correct: 'conc. HNO₃ + conc. H₂SO₄',
        options: ['conc. HNO₃ + conc. H₂SO₄', 'NaNO₂ / HCl, 0°C', 'Br₂ / FeBr₃', 'CH₃Cl / AlCl₃'],
        explanation:
          'Nitration uses a HNO₃/H₂SO₄ mixture, which generates the nitronium ion NO₂⁺ as the electrophile.',
      },
      {
        to: { formula: 'C₆H₅NH₂', name: 'Aniline' },
        correct: 'Sn + conc. HCl',
        options: ['Sn + conc. HCl', 'conc. H₂SO₄', 'CuCl / HCl', 'O₃ then Zn'],
        explanation:
          'Sn/HCl (or Fe/HCl) reduces the –NO₂ group all the way to –NH₂, giving aniline.',
      },
      {
        to: { formula: 'C₆H₅N₂⁺Cl⁻', name: 'Diazonium salt' },
        correct: 'NaNO₂ + HCl, 0–5°C',
        options: ['NaNO₂ + HCl, 0–5°C', 'conc. HNO₃', 'CuCN', 'Br₂ water'],
        explanation:
          'Diazotization of a 1° aryl amine with nitrous acid (NaNO₂/HCl) at 0–5°C gives the diazonium salt. Above 5°C it decomposes.',
      },
      {
        to: { formula: 'C₆H₅OH', name: 'Phenol' },
        correct: 'warm H₂O (H₃O⁺)',
        options: ['warm H₂O (H₃O⁺)', 'CuCl / HCl', 'H₂ / Pd', 'NaOH cold'],
        explanation:
          'Heating the diazonium salt in water hydrolyses –N₂⁺ to –OH, releasing N₂ → phenol.',
      },
    ],
  },
  {
    id: 'chain_propene',
    title: 'Propene → Acetone',
    accent: '#f59e0b',
    start: { formula: 'CH₃CH=CH₂', name: 'Propene' },
    target: { formula: 'CH₃COCH₃', name: 'Acetone' },
    steps: [
      {
        to: { formula: 'CH₃CHBrCH₃', name: '2-Bromopropane' },
        correct: 'HBr (no peroxide)',
        options: ['HBr (no peroxide)', 'HBr / peroxide', 'Br₂ / CCl₄', 'NaBr'],
        explanation:
          'Markovnikov addition of HBr (no peroxide) puts Br on the middle carbon → 2-bromopropane. Peroxide would give the 1-bromo isomer.',
      },
      {
        to: { formula: 'CH₃CH(OH)CH₃', name: 'Propan-2-ol' },
        correct: 'aq. KOH',
        options: ['aq. KOH', 'alc. KOH, Δ', 'Mg / dry ether', 'conc. H₂SO₄'],
        explanation:
          'Aqueous KOH substitutes Br with OH (SN1 on this 2° halide) → propan-2-ol. Alcoholic KOH would eliminate back to propene.',
      },
      {
        to: { formula: 'CH₃COCH₃', name: 'Acetone' },
        correct: 'acidified KMnO₄ / K₂Cr₂O₇',
        options: ['acidified KMnO₄ / K₂Cr₂O₇', 'PCC then again', 'LiAlH₄', 'Tollens’ reagent'],
        explanation:
          'Oxidation of a 2° alcohol gives a ketone (acetone). It cannot oxidise further easily because there is no H on the carbonyl carbon.',
      },
    ],
  },
  {
    id: 'chain_methane',
    title: 'Methane → Methanoic Acid',
    accent: '#3b82f6',
    start: { formula: 'CH₄', name: 'Methane' },
    target: { formula: 'HCOOH', name: 'Methanoic Acid' },
    steps: [
      {
        to: { formula: 'CH₃Cl', name: 'Chloromethane' },
        correct: 'Cl₂ / UV light',
        options: ['Cl₂ / UV light', 'HCl', 'aq. KOH', 'NaCl'],
        explanation:
          'UV light homolyses Cl₂ to start the free-radical substitution; with excess CH₄ the mono-chloride dominates.',
      },
      {
        to: { formula: 'CH₃OH', name: 'Methanol' },
        correct: 'aq. KOH',
        options: ['aq. KOH', 'alc. KOH, Δ', 'NaI / acetone', 'Mg / ether'],
        explanation:
          'Aqueous KOH replaces Cl with OH (SN2) → methanol. (CH₃Cl has no β-H, so elimination is impossible anyway.)',
      },
      {
        to: { formula: 'HCHO', name: 'Methanal' },
        correct: 'PCC (mild oxidant)',
        options: ['PCC (mild oxidant)', 'hot KMnO₄ / H⁺', 'LiAlH₄', 'Zn-Hg / HCl'],
        explanation:
          'A mild oxidant stops the 1° alcohol at the aldehyde (methanal). A strong oxidant would push it to the acid.',
      },
      {
        to: { formula: 'HCOOH', name: 'Methanoic Acid' },
        correct: 'acidified KMnO₄, Δ',
        options: ['acidified KMnO₄, Δ', 'NaBH₄', 'NaOH (Cannizzaro)', 'Clemmensen'],
        explanation:
          'Strong oxidation of methanal gives methanoic acid. (Conc. NaOH would instead trigger Cannizzaro — a trap!)',
      },
    ],
  },
  {
    id: 'chain_ethyne_aniline',
    title: 'Ethyne → Aniline',
    accent: '#2dd4bf',
    start: { formula: 'CH≡CH', name: 'Ethyne' },
    target: { formula: 'C₆H₅NH₂', name: 'Aniline' },
    steps: [
      {
        to: { formula: 'C₆H₆', name: 'Benzene' },
        correct: 'red-hot iron tube, 873 K',
        options: ['red-hot iron tube, 873 K', 'H₂ / Lindlar', 'dil. H₂SO₄, HgSO₄', 'Br₂ / CCl₄'],
        explanation:
          'Three ethyne molecules cyclically polymerise over a red-hot iron/Cu tube to form the benzene ring.',
      },
      {
        to: { formula: 'C₆H₅NO₂', name: 'Nitrobenzene' },
        correct: 'conc. HNO₃ + conc. H₂SO₄',
        options: ['conc. HNO₃ + conc. H₂SO₄', 'NaNO₂ / HCl, 0°C', 'Br₂ / FeBr₃', 'CH₃Cl / AlCl₃'],
        explanation: 'Nitration: the nitronium ion NO₂⁺ substitutes onto the ring → nitrobenzene.',
      },
      {
        to: { formula: 'C₆H₅NH₂', name: 'Aniline' },
        correct: 'Sn + conc. HCl',
        options: ['Sn + conc. HCl', 'conc. H₂SO₄', 'CuCl / HCl', 'O₃ then Zn'],
        explanation: 'Sn/HCl reduces –NO₂ all the way to –NH₂ → aniline.',
      },
    ],
  },
  {
    id: 'chain_toluene_benzene',
    title: 'Toluene → Benzene',
    accent: '#fb7185',
    start: { formula: 'C₆H₅CH₃', name: 'Toluene' },
    target: { formula: 'C₆H₆', name: 'Benzene' },
    steps: [
      {
        to: { formula: 'C₆H₅COOH', name: 'Benzoic acid' },
        correct: 'acidified KMnO₄, Δ',
        options: ['acidified KMnO₄, Δ', 'CrO₂Cl₂ (Étard)', 'Cl₂ / UV', 'H₂ / Ni'],
        explanation:
          'Hot KMnO₄ oxidises the whole side chain to –COOH. (Étard’s CrO₂Cl₂ would stop at the aldehyde.)',
      },
      {
        to: { formula: 'C₆H₆', name: 'Benzene' },
        correct: 'soda lime (NaOH–CaO), Δ',
        options: ['soda lime (NaOH–CaO), Δ', 'LiAlH₄', 'SOCl₂', 'conc. H₂SO₄'],
        explanation:
          'Decarboxylation: soda lime strips off –COOH as carbonate, leaving plain benzene.',
      },
    ],
  },
  {
    id: 'chain_acid_amine',
    title: 'Acetic Acid → Methanamine',
    accent: '#fbbf24',
    start: { formula: 'CH₃COOH', name: 'Acetic Acid' },
    target: { formula: 'CH₃NH₂', name: 'Methanamine' },
    steps: [
      {
        to: { formula: 'CH₃COCl', name: 'Ethanoyl chloride' },
        correct: 'SOCl₂',
        options: ['SOCl₂', 'LiAlH₄', 'NH₃', 'conc. H₂SO₄'],
        explanation:
          'SOCl₂ turns –COOH into the acid chloride; the gaseous by-products (SO₂, HCl) leave it pure.',
      },
      {
        to: { formula: 'CH₃CONH₂', name: 'Acetamide' },
        correct: 'NH₃ (excess)',
        options: ['NH₃ (excess)', 'H₂O', 'CH₃OH', 'LiAlH₄'],
        explanation: 'Ammonia displaces Cl from the acid chloride to give the amide.',
      },
      {
        to: { formula: 'CH₃NH₂', name: 'Methanamine' },
        correct: 'Br₂ + NaOH (Hofmann)',
        options: ['Br₂ + NaOH (Hofmann)', 'LiAlH₄', 'P₂O₅', 'H₃O⁺'],
        explanation:
          'Hofmann degradation drops one carbon → a 1° amine with one fewer C. (LiAlH₄ would keep both carbons, giving ethanamine — the classic trap.)',
      },
    ],
  },
  {
    id: 'chain_methane_ethane',
    title: 'Methane → Ethane',
    accent: '#34d399',
    start: { formula: 'CH₄', name: 'Methane' },
    target: { formula: 'CH₃CH₃', name: 'Ethane' },
    steps: [
      {
        to: { formula: 'CH≡CH', name: 'Ethyne' },
        correct: '1773 K (pyrolysis)',
        options: ['1773 K (pyrolysis)', 'Cl₂ / UV', 'aq. KOH', 'O₂ (combustion)'],
        explanation: 'At very high temperature methane pyrolyses and couples to ethyne.',
      },
      {
        to: { formula: 'CH₂=CH₂', name: 'Ethene' },
        correct: 'H₂ / Lindlar catalyst',
        options: ['H₂ / Lindlar catalyst', 'H₂ / Ni (excess)', 'Br₂', 'HBr'],
        explanation:
          'Lindlar (poisoned Pd) does PARTIAL hydrogenation to the alkene. Ordinary H₂/Ni would overshoot to ethane.',
      },
      {
        to: { formula: 'CH₃CH₃', name: 'Ethane' },
        correct: 'H₂ / Ni',
        options: ['H₂ / Ni', 'aq. KOH', 'Na / dry ether', 'alc. KOH'],
        explanation: 'Full catalytic hydrogenation saturates the double bond to ethane.',
      },
    ],
  },
  {
    id: 'chain_propanol_propanone',
    title: 'Propan-1-ol → Propanone',
    accent: '#60a5fa',
    start: { formula: 'CH₃CH₂CH₂OH', name: 'Propan-1-ol' },
    target: { formula: 'CH₃COCH₃', name: 'Propanone' },
    steps: [
      {
        to: { formula: 'CH₃CH=CH₂', name: 'Propene' },
        correct: 'conc. H₂SO₄, 443 K',
        options: ['conc. H₂SO₄, 443 K', 'acidified KMnO₄', 'aq. KOH', 'SOCl₂'],
        explanation: 'Acid dehydration removes water from the alcohol to give the alkene.',
      },
      {
        to: { formula: 'CH₃CH(OH)CH₃', name: 'Propan-2-ol' },
        correct: 'H₂O / dil. H₂SO₄ (Markovnikov)',
        options: ['H₂O / dil. H₂SO₄ (Markovnikov)', 'B₂H₆ then H₂O₂/OH⁻', 'HBr', 'aq. KOH'],
        explanation:
          'Markovnikov hydration puts –OH on the middle carbon. (Hydroboration would send it back to C1, regenerating propan-1-ol.)',
      },
      {
        to: { formula: 'CH₃COCH₃', name: 'Propanone' },
        correct: 'acidified K₂Cr₂O₇',
        options: ['acidified K₂Cr₂O₇', 'LiAlH₄', 'NaBH₄', 'Tollens’ reagent'],
        explanation: 'Oxidation of the 2° alcohol gives the ketone — it can’t easily oxidise further.',
      },
    ],
  },
]

export const chainById = (id) => CHAINS.find((c) => c.id === id)
