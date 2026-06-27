// RXN Rush — reaction bank.
// 51 reactions across 6 chapters (>= 8 each).
// `namedReactionId` links to a collectible card in namedReactions.js (or null).
// Distractors are chemically plausible mistakes a MHT-CET student actually makes.
// Every `explanation` says WHY the product forms, not just what it is.

export const REACTIONS = [
  // ============================================================
  // CHAPTER 1 — HYDROCARBONS
  // ============================================================
  {
    id: 'hyd_001',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CH₂ + HBr →',
    conditions: 'no peroxide, ionic addition',
    correctProduct: 'CH₃CHBrCH₃',
    correctLabel: '2-Bromopropane',
    distractors: [
      { label: '1-Bromopropane', value: 'CH₃CH₂CH₂Br' },
      { label: 'Propane', value: 'CH₃CH₂CH₃' },
      { label: '1,2-Dibromopropane', value: 'CH₃CHBrCH₂Br' },
    ],
    explanation:
      'Markovnikov addition: H⁺ adds to the =CH₂ carbon (more H’s) so the cation forms on the middle carbon (2°, more stable). Br⁻ then attacks there.',
    namedReactionId: 'markovnikov',
    difficulty: 'easy',
  },
  {
    id: 'hyd_002',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CH₂ + HBr →',
    conditions: 'organic peroxide (R–O–O–R), heat',
    correctProduct: 'CH₃CH₂CH₂Br',
    correctLabel: '1-Bromopropane',
    distractors: [
      { label: '2-Bromopropane', value: 'CH₃CHBrCH₃' },
      { label: 'Propene (no change)', value: 'CH₃CH=CH₂' },
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
    ],
    explanation:
      'Peroxide (Kharasch) effect: a free-radical chain forms the more stable 2° carbon radical, so Br ends up on the terminal carbon — anti-Markovnikov. Works ONLY with HBr.',
    namedReactionId: 'peroxide',
    difficulty: 'medium',
  },
  {
    id: 'hyd_003',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH₂CHBrCH₃ →',
    conditions: 'alcoholic KOH, heat (β-elimination)',
    correctProduct: 'CH₃CH=CHCH₃',
    correctLabel: 'But-2-ene (major)',
    distractors: [
      { label: 'But-1-ene (minor)', value: 'CH₃CH₂CH=CH₂' },
      { label: 'Butan-2-ol', value: 'CH₃CH₂CH(OH)CH₃' },
      { label: 'Butane', value: 'CH₃CH₂CH₂CH₃' },
    ],
    explanation:
      'Saytzeff’s rule: of the two possible alkenes, the more substituted but-2-ene is the major product because it is more stable (hyperconjugation).',
    namedReactionId: 'saytzeff',
    difficulty: 'medium',
  },
  {
    id: 'hyd_004',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CHCH₃ →',
    conditions: '(i) O₃  (ii) Zn / H₂O  (reductive)',
    correctProduct: '2 CH₃CHO',
    correctLabel: 'Ethanal × 2',
    distractors: [
      { label: 'Ethanoic acid × 2', value: '2 CH₃COOH' },
      { label: 'Propanone', value: 'CH₃COCH₃' },
      { label: 'Ethanal + Methanal', value: 'CH₃CHO + HCHO' },
    ],
    explanation:
      'Reductive ozonolysis cleaves the C=C. Zn/H₂O stops further oxidation, so each =CH– end becomes –CHO. But-2-ene is symmetric → two ethanal.',
    namedReactionId: 'ozonolysis',
    difficulty: 'medium',
  },
  {
    id: 'hyd_005',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CHCH₃ →',
    conditions: '(i) O₃  (ii) H₂O₂  (oxidative)',
    correctProduct: '2 CH₃COOH',
    correctLabel: 'Ethanoic acid × 2',
    distractors: [
      { label: 'Ethanal × 2', value: '2 CH₃CHO' },
      { label: 'Propanone', value: 'CH₃COCH₃' },
      { label: 'CO₂ + H₂O', value: 'CO₂ + H₂O' },
    ],
    explanation:
      'Oxidative work-up (H₂O₂) further oxidises the aldehyde fragments. Carbons bearing an H become –COOH, so symmetric but-2-ene gives two ethanoic acid.',
    namedReactionId: 'ozonolysis',
    difficulty: 'medium',
  },
  {
    id: 'hyd_006',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'C₆H₆ (benzene) →',
    conditions: 'Na in liquid NH₃, ethanol (Birch)',
    correctProduct: '1,4-cyclohexadiene',
    correctLabel: 'Unconjugated 1,4-diene',
    distractors: [
      { label: 'Cyclohexane', value: 'C₆H₁₂' },
      { label: '1,3-cyclohexadiene', value: '1,3-cyclohexadiene' },
      { label: 'Cyclohexene', value: 'C₆H₁₀' },
    ],
    explanation:
      'Birch reduction adds 2 H via solvated electrons, giving the UN-conjugated 1,4-diene (not the 1,3-diene and not full reduction to cyclohexane).',
    namedReactionId: 'birch',
    difficulty: 'hard',
  },
  {
    id: 'hyd_007',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₄ + Cl₂ →',
    conditions: 'UV light / sunlight (excess CH₄)',
    correctProduct: 'CH₃Cl + HCl',
    correctLabel: 'Chloromethane',
    distractors: [
      { label: 'CCl₄ only', value: 'CCl₄' },
      { label: 'No reaction in dark', value: 'CH₄ + Cl₂' },
      { label: 'Methanol', value: 'CH₃OH' },
    ],
    explanation:
      'Free-radical substitution: UV homolyses Cl₂ into Cl• radicals that abstract H. With excess methane, mono-substitution to CH₃Cl dominates.',
    namedReactionId: null,
    namedReactionText: 'Free-Radical Halogenation',
    difficulty: 'easy',
  },
  {
    id: 'hyd_008',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'C₆H₆ + CH₃Cl →',
    conditions: 'anhydrous AlCl₃ (Friedel–Crafts)',
    correctProduct: 'C₆H₅CH₃ + HCl',
    correctLabel: 'Toluene',
    distractors: [
      { label: 'Chlorobenzene', value: 'C₆H₅Cl' },
      { label: 'Benzaldehyde', value: 'C₆H₅CHO' },
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
    ],
    explanation:
      'AlCl₃ generates the CH₃⁺ electrophile, which substitutes onto the ring (electrophilic aromatic substitution) to give toluene.',
    namedReactionId: 'friedel_crafts',
    difficulty: 'medium',
  },

  // ============================================================
  // CHAPTER 2 — HALOALKANES & HALOARENES
  // ============================================================
  {
    id: 'hal_001',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Cl + NaI →',
    conditions: 'dry acetone (Finkelstein)',
    correctProduct: 'CH₃CH₂I + NaCl↓',
    correctLabel: 'Iodoethane',
    distractors: [
      { label: 'Ethene', value: 'CH₂=CH₂' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Finkelstein: NaI dissolves in acetone but NaCl does not, so NaCl precipitates and pulls the equilibrium toward the alkyl iodide.',
    namedReactionId: 'finkelstein',
    difficulty: 'medium',
  },
  {
    id: 'hal_002',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃Cl + AgF →',
    conditions: 'heat (Swarts)',
    correctProduct: 'CH₃F + AgCl',
    correctLabel: 'Fluoromethane',
    distractors: [
      { label: 'Methane', value: 'CH₄' },
      { label: 'Methanol', value: 'CH₃OH' },
      { label: 'CH₃I', value: 'CH₃I' },
    ],
    explanation:
      'Swarts reaction: a heavy-metal fluoride (AgF/Hg₂F₂/SbF₃) swaps Cl for F. AgCl is very stable, so the halide exchange is driven forward.',
    namedReactionId: 'swarts',
    difficulty: 'medium',
  },
  {
    id: 'hal_003',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: '2 CH₃CH₂Br + 2 Na →',
    conditions: 'dry ether (Wurtz)',
    correctProduct: 'CH₃CH₂CH₂CH₃',
    correctLabel: 'n-Butane',
    distractors: [
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
    ],
    explanation:
      'Wurtz coupling joins two ethyl groups into one alkane with double the carbons (butane). Note it doubles the carbon count, it does not just remove halogen.',
    namedReactionId: 'wurtz',
    difficulty: 'medium',
  },
  {
    id: 'hal_004',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂CH₂Br + KOH →',
    conditions: 'aqueous KOH (1° halide)',
    correctProduct: 'CH₃CH₂CH₂OH',
    correctLabel: 'Propan-1-ol (SN2)',
    distractors: [
      { label: 'Propene', value: 'CH₃CH=CH₂' },
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: 'Propanal', value: 'CH₃CH₂CHO' },
    ],
    explanation:
      'Aqueous KOH gives OH⁻ acting as a nucleophile. On a 1° halide this is a clean SN2 with inversion → the alcohol, not the alkene.',
    namedReactionId: null,
    namedReactionText: 'SN2 Substitution',
    difficulty: 'easy',
  },
  {
    id: 'hal_005',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: '(CH₃)₃C–Br + KOH →',
    conditions: 'aqueous KOH (3° halide)',
    correctProduct: '(CH₃)₃C–OH',
    correctLabel: '2-Methylpropan-2-ol (SN1)',
    distractors: [
      { label: '2-Methylpropene', value: '(CH₃)₂C=CH₂' },
      { label: 'Isobutane', value: '(CH₃)₃CH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'A 3° halide ionises easily to a stable 3° carbocation, so substitution goes by SN1. With aqueous (not alcoholic) KOH the alcohol is the main product.',
    namedReactionId: null,
    namedReactionText: 'SN1 Substitution',
    difficulty: 'medium',
  },
  {
    id: 'hal_006',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + Mg →',
    conditions: 'dry ether',
    correctProduct: 'CH₃CH₂MgBr',
    correctLabel: 'Ethylmagnesium bromide',
    distractors: [
      { label: 'Butane (Wurtz)', value: 'CH₃CH₂CH₂CH₃' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
    ],
    explanation:
      'Mg inserts into the C–X bond to give the Grignard reagent R–MgX. Conditions must be perfectly dry — a trace of water destroys it to the alkane.',
    namedReactionId: 'grignard',
    difficulty: 'medium',
  },
  {
    id: 'hal_007',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + KOH →',
    conditions: 'alcoholic KOH, heat',
    correctProduct: 'CH₂=CH₂',
    correctLabel: 'Ethene (elimination)',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethanal', value: 'CH₃CHO' },
    ],
    explanation:
      'ALCOHOLIC KOH supplies OR⁻, a strong base that favours β-elimination (E2) over substitution → the alkene. (Aqueous KOH would give the alcohol.)',
    namedReactionId: null,
    namedReactionText: 'Dehydrohalogenation',
    difficulty: 'easy',
  },
  {
    id: 'hal_008',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + KCN →',
    conditions: 'ethanol–water (KCN is ionic)',
    correctProduct: 'CH₃CH₂CN',
    correctLabel: 'Propanenitrile (C attacks)',
    distractors: [
      { label: 'Ethyl isocyanide', value: 'CH₃CH₂NC' },
      { label: 'Propan-1-amine', value: 'CH₃CH₂CH₂NH₂' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
    ],
    explanation:
      'KCN is ionic, so CN⁻ attacks through its CARBON (more nucleophilic) giving the nitrile R–CN. (AgCN, being covalent, would give the isocyanide instead.)',
    namedReactionId: null,
    namedReactionText: 'Nitrile Synthesis',
    difficulty: 'medium',
  },

  // ============================================================
  // CHAPTER 3 — ALCOHOLS, PHENOLS & ETHERS
  // ============================================================
  {
    id: 'alc_001',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: '(CH₃)₃C–OH + Lucas reagent →',
    conditions: 'conc. HCl + anhyd. ZnCl₂, room temp',
    correctProduct: 'turbidity at once',
    correctLabel: 'Immediate cloudiness (3°)',
    distractors: [
      { label: 'Turbidity in 5 min', value: 'cloudy ~5 min' },
      { label: 'No turbidity', value: 'stays clear' },
      { label: 'Silver mirror', value: 'Ag↓' },
    ],
    explanation:
      'Lucas test: a 3° alcohol forms a stable 3° carbocation instantly, so the insoluble chloride (turbidity) appears immediately. 2° is slow, 1° gives nothing cold.',
    namedReactionId: 'lucas',
    difficulty: 'medium',
  },
  {
    id: 'alc_002',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅OH + CHCl₃ →',
    conditions: 'aq. NaOH, 340 K, then H₃O⁺',
    correctProduct: 'o-HO-C₆H₄-CHO',
    correctLabel: 'Salicylaldehyde',
    distractors: [
      { label: 'Salicylic acid', value: 'o-HO-C₆H₄-COOH' },
      { label: 'Benzaldehyde', value: 'C₆H₅CHO' },
      { label: 'Anisole', value: 'C₆H₅OCH₃' },
    ],
    explanation:
      'Reimer–Tiemann: CHCl₃ + NaOH makes dichlorocarbene (:CCl₂), which attaches a –CHO group ortho to the phenol OH → salicylaldehyde.',
    namedReactionId: 'reimer_tiemann',
    difficulty: 'hard',
  },
  {
    id: 'alc_003',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅ONa + CO₂ →',
    conditions: '125°C, 4–7 atm, then H₃O⁺ (Kolbe–Schmitt)',
    correctProduct: 'o-HO-C₆H₄-COOH',
    correctLabel: 'Salicylic acid',
    distractors: [
      { label: 'Salicylaldehyde', value: 'o-HO-C₆H₄-CHO' },
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
      { label: 'Phenyl carbonate', value: '(C₆H₅O)₂CO' },
    ],
    explanation:
      'Kolbe–Schmitt: the nucleophilic phenoxide ring attacks CO₂, putting –COOH ortho to –OH → salicylic acid (the precursor of aspirin).',
    namedReactionId: 'kolbe_schmitt',
    difficulty: 'hard',
  },
  {
    id: 'alc_004',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃CH₂ONa + CH₃CH₂Br →',
    conditions: 'Williamson synthesis',
    correctProduct: 'CH₃CH₂OCH₂CH₃',
    correctLabel: 'Diethyl ether',
    distractors: [
      { label: 'Butane', value: 'CH₃CH₂CH₂CH₃' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
    ],
    explanation:
      'Williamson synthesis: alkoxide RO⁻ does an SN2 on the alkyl halide, building the C–O–C ether linkage → diethyl ether.',
    namedReactionId: 'williamson',
    difficulty: 'medium',
  },
  {
    id: 'alc_005',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃CH₂OH →',
    conditions: 'conc. H₂SO₄, 443 K (170°C)',
    correctProduct: 'CH₂=CH₂',
    correctLabel: 'Ethene',
    distractors: [
      { label: 'Diethyl ether', value: 'CH₃CH₂OCH₂CH₃' },
      { label: 'Ethanal', value: 'CH₃CHO' },
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
    ],
    explanation:
      'At the HIGH temperature (170°C) intramolecular dehydration wins → alkene. At ~140°C the same acid instead gives diethyl ether (intermolecular).',
    namedReactionId: null,
    namedReactionText: 'Acid Dehydration',
    difficulty: 'medium',
  },
  {
    id: 'alc_006',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃COOH + CH₃CH₂OH →',
    conditions: 'conc. H₂SO₄ (Fischer), reversible',
    correctProduct: 'CH₃COOCH₂CH₃',
    correctLabel: 'Ethyl ethanoate',
    distractors: [
      { label: 'Ethyl methanoate', value: 'HCOOCH₂CH₃' },
      { label: 'Diethyl ether', value: 'CH₃CH₂OCH₂CH₃' },
      { label: 'Acetone', value: 'CH₃COCH₃' },
    ],
    explanation:
      'Fischer esterification: acid + alcohol with H₂SO₄ catalyst lose water to form the ester. The –OH leaves from the ACID, the H from the alcohol.',
    namedReactionId: 'fischer',
    difficulty: 'easy',
  },
  {
    id: 'alc_007',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃CH₂OH →',
    conditions: 'acidified KMnO₄, heat (strong oxidant)',
    correctProduct: 'CH₃COOH',
    correctLabel: 'Ethanoic acid',
    distractors: [
      { label: 'Ethanal (stops here)', value: 'CH₃CHO' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
      { label: 'CO₂ + H₂O', value: 'CO₂ + H₂O' },
    ],
    explanation:
      'A strong oxidant (KMnO₄) takes a 1° alcohol all the way to the carboxylic acid. A milder reagent (PCC) would stop at the aldehyde.',
    namedReactionId: null,
    namedReactionText: 'Oxidation of 1° Alcohol',
    difficulty: 'medium',
  },
  {
    id: 'alc_008',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅OH + 3 Br₂ →',
    conditions: 'bromine water (excess), room temp',
    correctProduct: '2,4,6-tribromophenol↓',
    correctLabel: 'White precipitate',
    distractors: [
      { label: 'o-/p-bromophenol', value: 'mono-bromophenol' },
      { label: 'Bromobenzene', value: 'C₆H₅Br' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'The –OH group strongly activates the ring (o/p-directing), so in bromine WATER all three free positions brominate at once → insoluble 2,4,6-tribromophenol.',
    namedReactionId: null,
    namedReactionText: 'Bromination of Phenol',
    difficulty: 'medium',
  },

  // ============================================================
  // CHAPTER 4 — ALDEHYDES & KETONES
  // ============================================================
  {
    id: 'ald_001',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: '2 CH₃CHO →',
    conditions: 'dilute NaOH, cold',
    correctProduct: 'CH₃CH(OH)CH₂CHO',
    correctLabel: 'Aldol (3-hydroxybutanal)',
    distractors: [
      { label: 'Cannizzaro products', value: 'CH₃OH + CH₃COO⁻' },
      { label: 'Crotonaldehyde (heated)', value: 'CH₃CH=CHCHO' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Ethanal HAS an α-hydrogen, so dilute base makes a carbanion that adds to a second molecule → β-hydroxy aldehyde (aldol). Heating would then dehydrate it.',
    namedReactionId: 'aldol',
    difficulty: 'medium',
  },
  {
    id: 'ald_002',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: '2 HCHO →',
    conditions: 'concentrated NaOH',
    correctProduct: 'CH₃OH + HCOONa',
    correctLabel: 'Methanol + sodium formate',
    distractors: [
      { label: 'Aldol product', value: 'OHC-CH₂-CH(OH)...' },
      { label: 'Glucose', value: 'C₆H₁₂O₆' },
      { label: 'HCOOH only', value: 'HCOOH' },
    ],
    explanation:
      'Methanal has NO α-hydrogen, so it cannot do aldol. Instead it self-disproportionates (Cannizzaro): one molecule is reduced to CH₃OH, one oxidised to formate.',
    namedReactionId: 'cannizzaro',
    difficulty: 'medium',
  },
  {
    id: 'ald_003',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + [Ag(NH₃)₂]⁺ →',
    conditions: "Tollens' reagent, warm",
    correctProduct: 'Ag↓ (silver mirror)',
    correctLabel: 'Silver mirror + CH₃COO⁻',
    distractors: [
      { label: 'Brick-red ppt', value: 'Cu₂O↓' },
      { label: 'No reaction', value: '–' },
      { label: 'White ppt', value: 'AgCl↓' },
    ],
    explanation:
      'Tollens’ test: the aldehyde reduces Ag⁺ to metallic silver (the mirror) and is itself oxidised to the carboxylate. Ketones give no mirror.',
    namedReactionId: 'tollens',
    difficulty: 'easy',
  },
  {
    id: 'ald_004',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + Fehling’s solution →',
    conditions: 'Cu²⁺ / tartrate, warm',
    correctProduct: 'Cu₂O↓ (brick-red)',
    correctLabel: 'Brick-red precipitate',
    distractors: [
      { label: 'Silver mirror', value: 'Ag↓' },
      { label: 'No reaction', value: '–' },
      { label: 'Blue solution stays', value: 'Cu²⁺(aq)' },
    ],
    explanation:
      'Fehling’s test: the aldehyde reduces blue Cu²⁺ to red copper(I) oxide. Aromatic aldehydes and ketones do NOT respond — useful to tell them apart.',
    namedReactionId: 'fehling',
    difficulty: 'easy',
  },
  {
    id: 'ald_005',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCH₃ →',
    conditions: 'Zn-Hg, conc. HCl (Clemmensen)',
    correctProduct: 'CH₃CH₂CH₃',
    correctLabel: 'Propane',
    distractors: [
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: 'Propene', value: 'CH₃CH=CH₂' },
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
    ],
    explanation:
      'Clemmensen reduces the C=O all the way to CH₂ (not just to the alcohol) under acidic Zn-Hg/HCl, so propanone → propane.',
    namedReactionId: 'clemmensen',
    difficulty: 'medium',
  },
  {
    id: 'ald_006',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCH₃ →',
    conditions: 'NH₂NH₂ then KOH/glycol, Δ (Wolff–Kishner)',
    correctProduct: 'CH₃CH₂CH₃',
    correctLabel: 'Propane',
    distractors: [
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: 'Propan-2-one oxime', value: '(CH₃)₂C=NOH' },
      { label: 'Propene', value: 'CH₃CH=CH₂' },
    ],
    explanation:
      'Wolff–Kishner also gives C=O → CH₂, but via the hydrazone under BASIC conditions — the choice when the molecule cannot survive Clemmensen’s acid.',
    namedReactionId: 'wolff_kishner',
    difficulty: 'medium',
  },
  {
    id: 'ald_007',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCl →',
    conditions: 'H₂ / Pd–BaSO₄ (Rosenmund)',
    correctProduct: 'CH₃CHO',
    correctLabel: 'Ethanal',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
    ],
    explanation:
      'Rosenmund: the acid chloride is reduced to the ALDEHYDE and stops there because Pd is poisoned by BaSO₄ (preventing over-reduction to the alcohol).',
    namedReactionId: 'rosenmund',
    difficulty: 'medium',
  },
  {
    id: 'ald_008',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCH₃ + I₂ + NaOH →',
    conditions: 'warm (iodoform / haloform)',
    correctProduct: 'CHI₃↓ + CH₃COONa',
    correctLabel: 'Yellow iodoform ppt',
    distractors: [
      { label: 'No reaction', value: '–' },
      { label: 'CO₂ + H₂O', value: 'CO₂ + H₂O' },
      { label: 'CH₃COCH₂I', value: 'CH₃COCH₂I' },
    ],
    explanation:
      'Haloform test: a CH₃CO– (methyl ketone) group is needed. The CH₃ is triply iodinated then cleaved to give the yellow CHI₃ precipitate.',
    namedReactionId: 'haloform',
    difficulty: 'medium',
  },
  {
    id: 'ald_009',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'HCHO + CH₃MgBr →',
    conditions: 'dry ether, then H₃O⁺',
    correctProduct: 'CH₃CH₂OH',
    correctLabel: 'Ethanol (1° alcohol)',
    distractors: [
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: '2-methylpropan-2-ol', value: '(CH₃)₃COH' },
      { label: 'Methanol', value: 'CH₃OH' },
    ],
    explanation:
      'Grignard + methanal always gives a PRIMARY alcohol: R adds to the carbonyl C, and methanal’s lone H stays, so one extra carbon → ethanol.',
    namedReactionId: 'grignard',
    difficulty: 'medium',
  },
  {
    id: 'ald_010',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + CH₃MgBr →',
    conditions: 'dry ether, then H₃O⁺',
    correctProduct: 'CH₃CH(OH)CH₃',
    correctLabel: 'Propan-2-ol (2° alcohol)',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: '2-methylpropan-2-ol', value: '(CH₃)₃COH' },
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
    ],
    explanation:
      'Grignard + any other aldehyde gives a SECONDARY alcohol. Ethanal + CH₃MgBr builds propan-2-ol (OH on a carbon bonded to two other carbons).',
    namedReactionId: 'grignard',
    difficulty: 'medium',
  },
  {
    id: 'ald_011',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCH₃ + CH₃MgBr →',
    conditions: 'dry ether, then H₃O⁺',
    correctProduct: '(CH₃)₃COH',
    correctLabel: '2-methylpropan-2-ol (3°)',
    distractors: [
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: 'Butan-2-ol', value: 'CH₃CH(OH)CH₂CH₃' },
      { label: 'Propane', value: 'CH₃CH₂CH₃' },
    ],
    explanation:
      'Grignard + a KETONE gives a TERTIARY alcohol. The carbonyl C already carries two carbons, and R makes a third → (CH₃)₃COH.',
    namedReactionId: 'grignard',
    difficulty: 'medium',
  },

  // ============================================================
  // CHAPTER 5 — CARBOXYLIC ACIDS
  // ============================================================
  {
    id: 'car_001',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + Br₂ →',
    conditions: 'red phosphorus (HVZ), then H₂O',
    correctProduct: 'BrCH₂COOH',
    correctLabel: 'Bromoethanoic acid',
    distractors: [
      { label: 'CH₃COBr', value: 'CH₃COBr' },
      { label: 'CH₂BrCOBr', value: 'CH₂BrCOBr' },
      { label: 'CO₂ + HBr', value: 'CO₂ + HBr' },
    ],
    explanation:
      'Hell–Volhard–Zelinsky halogenates the α-carbon (not the COOH). Red P makes the acid bromide, whose enol picks up Br at the α-position.',
    namedReactionId: 'hvz',
    difficulty: 'hard',
  },
  {
    id: 'car_002',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: '2 CH₃COONa + 2 H₂O →',
    conditions: 'electrolysis (Kolbe)',
    correctProduct: 'CH₃CH₃ + 2 CO₂',
    correctLabel: 'Ethane + CO₂',
    distractors: [
      { label: 'Methane', value: 'CH₄' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
    ],
    explanation:
      'Kolbe electrolysis: acetate is oxidised at the anode, loses CO₂ to give CH₃• radicals, which pair up → ethane (carbon count doubles, minus the COOH).',
    namedReactionId: 'kolbe_electrolysis',
    difficulty: 'hard',
  },
  {
    id: 'car_003',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + CH₃OH →',
    conditions: 'conc. H₂SO₄ (Fischer), reversible',
    correctProduct: 'CH₃COOCH₃',
    correctLabel: 'Methyl ethanoate',
    distractors: [
      { label: 'Ethyl methanoate', value: 'HCOOCH₂CH₃' },
      { label: 'Dimethyl ether', value: 'CH₃OCH₃' },
      { label: 'Acetone', value: 'CH₃COCH₃' },
    ],
    explanation:
      'Fischer esterification: the acid’s –OH and the alcohol’s –H leave as water, joining them as the ester. Reversible — driven by removing water.',
    namedReactionId: 'fischer',
    difficulty: 'easy',
  },
  {
    id: 'car_004',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COONa + NaOH →',
    conditions: 'CaO (soda lime), heat',
    correctProduct: 'CH₄ + Na₂CO₃',
    correctLabel: 'Methane',
    distractors: [
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethanal', value: 'CH₃CHO' },
    ],
    explanation:
      'Decarboxylation: soda lime removes the –COOH as carbonate, replacing it with H. So acetate (2 C) gives methane (1 C) — one carbon shorter.',
    namedReactionId: null,
    namedReactionText: 'Decarboxylation',
    difficulty: 'medium',
  },
  {
    id: 'car_005',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + SOCl₂ →',
    conditions: 'reflux',
    correctProduct: 'CH₃COCl + SO₂ + HCl',
    correctLabel: 'Ethanoyl chloride',
    distractors: [
      { label: 'Ethanal', value: 'CH₃CHO' },
      { label: 'Acetic anhydride', value: '(CH₃CO)₂O' },
      { label: 'Chloroethane', value: 'CH₃CH₂Cl' },
    ],
    explanation:
      'SOCl₂ converts –COOH to the acid chloride. It is preferred because both by-products (SO₂, HCl) are gases that escape, leaving a pure product.',
    namedReactionId: null,
    namedReactionText: 'Acid Chloride Formation',
    difficulty: 'medium',
  },
  {
    id: 'car_006',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH →',
    conditions: '(i) LiAlH₄  (ii) H₃O⁺',
    correctProduct: 'CH₃CH₂OH',
    correctLabel: 'Ethanol (1° alcohol)',
    distractors: [
      { label: 'Ethanal (stops here)', value: 'CH₃CHO' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'LiAlH₄ is a powerful hydride donor that reduces –COOH straight to the 1° alcohol. (NaBH₄ is too weak to touch a carboxylic acid.)',
    namedReactionId: null,
    namedReactionText: 'LiAlH₄ Reduction',
    difficulty: 'medium',
  },
  {
    id: 'car_007',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + NaHCO₃ →',
    conditions: 'aqueous, room temp',
    correctProduct: 'CH₃COONa + CO₂↑ + H₂O',
    correctLabel: 'Brisk effervescence',
    distractors: [
      { label: 'No reaction', value: '–' },
      { label: 'CH₃CHO', value: 'CH₃CHO' },
      { label: 'CH₃COOCH₃', value: 'CH₃COOCH₃' },
    ],
    explanation:
      'Carboxylic acids are strong enough to liberate CO₂ from bicarbonate (brisk fizz) — phenols are NOT, so this distinguishes acids from phenols.',
    namedReactionId: null,
    namedReactionText: 'Bicarbonate Test',
    difficulty: 'easy',
  },
  {
    id: 'car_008',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + NH₃ →',
    conditions: 'then strong heat (Δ)',
    correctProduct: 'CH₃CONH₂ + H₂O',
    correctLabel: 'Acetamide',
    distractors: [
      { label: 'Ammonium acetate (no heat)', value: 'CH₃COONH₄' },
      { label: 'Acetonitrile', value: 'CH₃CN' },
      { label: 'Ethylamine', value: 'CH₃CH₂NH₂' },
    ],
    explanation:
      'Acid + NH₃ first gives the ammonium salt; STRONG heating then drives off water to form the amide. (Even harder heating would dehydrate it to the nitrile.)',
    namedReactionId: null,
    namedReactionText: 'Amide Formation',
    difficulty: 'medium',
  },

  // ============================================================
  // CHAPTER 6 — AMINES
  // ============================================================
  {
    id: 'amn_001',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃CONH₂ + Br₂ + 4NaOH →',
    conditions: 'Hofmann bromamide degradation',
    correctProduct: 'CH₃NH₂',
    correctLabel: 'Methanamine',
    distractors: [
      { label: 'Ethanamine', value: 'CH₃CH₂NH₂' },
      { label: 'Acetic acid', value: 'CH₃COOH' },
      { label: 'Ethanenitrile', value: 'CH₃CN' },
    ],
    explanation:
      'Hofmann degradation gives a 1° amine with ONE FEWER carbon — the carbonyl C leaves as carbonate. So acetamide (2 C) → methanamine (1 C).',
    namedReactionId: 'hofmann',
    difficulty: 'hard',
  },
  {
    id: 'amn_002',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'Phthalimide → ... → ',
    conditions: 'KOH; C₂H₅Br; then hydrolysis (Gabriel)',
    correctProduct: 'CH₃CH₂NH₂',
    correctLabel: 'Ethanamine (pure 1°)',
    distractors: [
      { label: '(C₂H₅)₂NH', value: '(CH₃CH₂)₂NH' },
      { label: 'Aniline', value: 'C₆H₅NH₂' },
      { label: 'Ethanenitrile', value: 'CH₃CN' },
    ],
    explanation:
      'Gabriel synthesis gives ONLY pure primary amines (no 2°/3° mixture). It fails for aromatic amines because aryl halides won’t do the needed SN2.',
    namedReactionId: 'gabriel',
    difficulty: 'hard',
  },
  {
    id: 'amn_003',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅N₂⁺Cl⁻ →',
    conditions: 'CuCl / HCl (Sandmeyer)',
    correctProduct: 'C₆H₅Cl + N₂↑',
    correctLabel: 'Chlorobenzene',
    distractors: [
      { label: 'Phenol', value: 'C₆H₅OH' },
      { label: 'Benzene', value: 'C₆H₆' },
      { label: 'Aniline', value: 'C₆H₅NH₂' },
    ],
    explanation:
      'Sandmeyer: cuprous chloride replaces the –N₂⁺ group with –Cl, releasing N₂. (Warm water instead of CuCl would have given phenol.)',
    namedReactionId: 'sandmeyer',
    difficulty: 'medium',
  },
  {
    id: 'amn_004',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅N₂⁺Cl⁻ →',
    conditions: 'Cu powder / HCl (Gattermann)',
    correctProduct: 'C₆H₅Cl + N₂↑',
    correctLabel: 'Chlorobenzene',
    distractors: [
      { label: 'Phenol', value: 'C₆H₅OH' },
      { label: 'Nitrobenzene', value: 'C₆H₅NO₂' },
      { label: 'Biphenyl', value: 'C₆H₅–C₆H₅' },
    ],
    explanation:
      'Gattermann gives the same –Cl/–Br substitution as Sandmeyer but uses cheaper Cu powder + HX. Yields are a bit lower than the Cu(I) salt route.',
    namedReactionId: 'gattermann',
    difficulty: 'medium',
  },
  {
    id: 'amn_005',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅N₂⁺Cl⁻ + C₆H₅OH →',
    conditions: 'mild alkaline, 0–5°C (coupling)',
    correctProduct: 'p-HO-C₆H₄-N=N-C₆H₅',
    correctLabel: 'p-Hydroxyazobenzene (orange dye)',
    distractors: [
      { label: 'Chlorobenzene', value: 'C₆H₅Cl' },
      { label: 'Diphenyl ether', value: 'C₆H₅-O-C₆H₅' },
      { label: 'Phenol + N₂', value: 'C₆H₅OH + N₂' },
    ],
    explanation:
      'Azo coupling: the weak electrophile N₂⁺ attacks the activated phenol ring at the para position, giving a coloured –N=N– azo dye.',
    namedReactionId: 'coupling',
    difficulty: 'medium',
  },
  {
    id: 'amn_006',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃CH₂NH₂ + C₆H₅SO₂Cl →',
    conditions: 'Hinsberg test, then aq. KOH',
    correctProduct: 'soluble in KOH',
    correctLabel: 'Clear solution (1° amine)',
    distractors: [
      { label: 'Insoluble in KOH (2°)', value: 'ppt stays' },
      { label: 'No reaction (3°)', value: '–' },
      { label: 'Silver mirror', value: 'Ag↓' },
    ],
    explanation:
      'Hinsberg: a 1° amine’s sulfonamide still has an acidic N–H, so it DISSOLVES in KOH. A 2° amine’s sulfonamide has no N–H (insoluble); 3° amines don’t react.',
    namedReactionId: 'hinsberg',
    difficulty: 'hard',
  },
  {
    id: 'amn_007',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃NH₂ + CHCl₃ + 3KOH →',
    conditions: 'heat (carbylamine test)',
    correctProduct: 'CH₃NC',
    correctLabel: 'Methyl isocyanide (foul smell)',
    distractors: [
      { label: 'CH₃CN (nitrile)', value: 'CH₃CN' },
      { label: 'CH₃Cl', value: 'CH₃Cl' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Carbylamine test: only 1° amines react with CHCl₃ + KOH (via dichlorocarbene) to give the offensively smelling isocyanide. 2°/3° amines give nothing.',
    namedReactionId: 'carbylamine',
    difficulty: 'medium',
  },
  {
    id: 'amn_008',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅NH₂ + NaNO₂ + HCl →',
    conditions: '0–5°C (diazotization)',
    correctProduct: 'C₆H₅N₂⁺Cl⁻',
    correctLabel: 'Benzenediazonium chloride',
    distractors: [
      { label: 'Nitrobenzene', value: 'C₆H₅NO₂' },
      { label: 'Phenol', value: 'C₆H₅OH' },
      { label: 'N-nitrosoaniline', value: 'C₆H₅N(NO)H' },
    ],
    explanation:
      'Diazotization must be kept at 0–5°C — the diazonium salt decomposes to phenol if warmed. Aryl amines give stable salts; 1° alkyl amines do not.',
    namedReactionId: 'diazotization',
    difficulty: 'medium',
  },

  // ============================================================
  // EXTRA HIGH-YIELD CET REACTIONS (deepen each chapter)
  // ============================================================

  // --- Hydrocarbons ---
  {
    id: 'hyd_009',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CH₂ →',
    conditions: '(i) B₂H₆  (ii) H₂O₂ / OH⁻',
    correctProduct: 'CH₃CH₂CH₂OH',
    correctLabel: 'Propan-1-ol (anti-Markovnikov)',
    distractors: [
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
      { label: '1-Bromopropane', value: 'CH₃CH₂CH₂Br' },
      { label: 'Propanal', value: 'CH₃CH₂CHO' },
    ],
    explanation:
      'Hydroboration–oxidation: boron adds to the less-hindered terminal carbon, then is replaced by OH there → anti-Markovnikov alcohol with NO rearrangement.',
    namedReactionId: null,
    namedReactionText: 'Hydroboration–Oxidation',
    difficulty: 'hard',
  },
  {
    id: 'hyd_010',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₃CH=CH₂ + H₂O →',
    conditions: 'dilute H₂SO₄ (Markovnikov)',
    correctProduct: 'CH₃CH(OH)CH₃',
    correctLabel: 'Propan-2-ol',
    distractors: [
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
      { label: 'Propane', value: 'CH₃CH₂CH₃' },
      { label: 'Acetone', value: 'CH₃COCH₃' },
    ],
    explanation:
      'Acid-catalysed hydration goes through the more stable 2° carbocation, so –OH ends up on the middle carbon (Markovnikov orientation).',
    namedReactionId: null,
    namedReactionText: 'Acid Hydration',
    difficulty: 'medium',
  },
  {
    id: 'hyd_011',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'C₆H₆ + CH₃COCl →',
    conditions: 'anhydrous AlCl₃ (F–C acylation)',
    correctProduct: 'C₆H₅COCH₃',
    correctLabel: 'Acetophenone',
    distractors: [
      { label: 'Toluene', value: 'C₆H₅CH₃' },
      { label: 'Benzaldehyde', value: 'C₆H₅CHO' },
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
    ],
    explanation:
      'AlCl₃ generates the acylium ion CH₃CO⁺, which substitutes onto the ring → a ketone. Unlike alkylation, acylation never rearranges or over-substitutes.',
    namedReactionId: null,
    namedReactionText: 'Friedel–Crafts Acylation',
    difficulty: 'medium',
  },
  {
    id: 'hyd_012',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH≡CH + H₂O →',
    conditions: 'dil. H₂SO₄, HgSO₄ (Kucherov)',
    correctProduct: 'CH₃CHO',
    correctLabel: 'Ethanal',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
    ],
    explanation:
      'Water adds across the triple bond to an unstable enol that tautomerises to the carbonyl. Ethyne uniquely gives an aldehyde; higher alkynes give ketones.',
    namedReactionId: null,
    namedReactionText: 'Kucherov Reaction',
    difficulty: 'hard',
  },

  // --- Haloalkanes ---
  {
    id: 'hal_009',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'C₆H₅Br + CH₃Br + 2Na →',
    conditions: 'dry ether (Wurtz–Fittig)',
    correctProduct: 'C₆H₅CH₃',
    correctLabel: 'Toluene',
    distractors: [
      { label: 'Biphenyl', value: 'C₆H₅–C₆H₅' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Benzene', value: 'C₆H₆' },
    ],
    explanation:
      'Wurtz–Fittig joins an ARYL halide to an ALKYL halide using sodium, hanging the alkyl group on the ring → toluene. Two aryl halides alone give biphenyl.',
    namedReactionId: 'wurtz_fittig',
    difficulty: 'medium',
  },
  {
    id: 'hal_010',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂CN + 2H₂O →',
    conditions: 'dil. HCl, heat (hydrolysis)',
    correctProduct: 'CH₃CH₂COOH',
    correctLabel: 'Propanoic acid',
    distractors: [
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
      { label: 'Propan-1-amine', value: 'CH₃CH₂CH₂NH₂' },
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
    ],
    explanation:
      'Hydrolysis converts –C≡N to –COOH (via the amide). The nitrile carbon becomes the acid carbon, so the product has one more carbon than the alkyl group.',
    namedReactionId: null,
    namedReactionText: 'Nitrile Hydrolysis',
    difficulty: 'medium',
  },
  {
    id: 'hal_011',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + NH₃ (excess) →',
    conditions: 'sealed tube (ammonolysis)',
    correctProduct: 'CH₃CH₂NH₂',
    correctLabel: 'Ethanamine (1°)',
    distractors: [
      { label: 'Ethanenitrile', value: 'CH₃CN' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
    ],
    explanation:
      'NH₃ is the nucleophile (SN2), displacing Br to give the 1° amine. Excess ammonia is used to limit further alkylation to 2°/3° amines.',
    namedReactionId: null,
    namedReactionText: 'Ammonolysis',
    difficulty: 'medium',
  },

  // --- Alcohols, Phenols & Ethers ---
  {
    id: 'alc_009',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅CH(CH₃)₂ (cumene) →',
    conditions: '(i) O₂  (ii) dil. H₂SO₄',
    correctProduct: 'C₆H₅OH + CH₃COCH₃',
    correctLabel: 'Phenol + acetone',
    distractors: [
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
      { label: 'Benzaldehyde', value: 'C₆H₅CHO' },
      { label: '2-Phenylpropan-2-ol', value: 'C₆H₅C(OH)(CH₃)₂' },
    ],
    explanation:
      'Cumene process (industrial phenol): cumene is air-oxidised to a hydroperoxide, which acid splits into BOTH phenol and acetone — two useful products.',
    namedReactionId: null,
    namedReactionText: 'Cumene Process',
    difficulty: 'hard',
  },
  {
    id: 'alc_010',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃CH(OH)CH₃ →',
    conditions: 'acidified K₂Cr₂O₇, heat',
    correctProduct: 'CH₃COCH₃',
    correctLabel: 'Propanone (ketone)',
    distractors: [
      { label: 'Propanoic acid', value: 'CH₃CH₂COOH' },
      { label: 'Propan-1-ol', value: 'CH₃CH₂CH₂OH' },
      { label: 'Propene', value: 'CH₃CH=CH₂' },
    ],
    explanation:
      'A 2° alcohol oxidises to a ketone and then resists further oxidation (no H on the carbonyl C) — unlike a 1° alcohol, which goes on to the acid.',
    namedReactionId: null,
    namedReactionText: 'Oxidation of 2° Alcohol',
    difficulty: 'medium',
  },

  // --- Aldehydes & Ketones ---
  {
    id: 'ald_012',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'C₆H₅CH₃ →',
    conditions: 'CrO₂Cl₂ in CS₂, then H₃O⁺ (Étard)',
    correctProduct: 'C₆H₅CHO',
    correctLabel: 'Benzaldehyde',
    distractors: [
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
      { label: 'Benzyl alcohol', value: 'C₆H₅CH₂OH' },
      { label: 'Benzyl chloride', value: 'C₆H₅CH₂Cl' },
    ],
    explanation:
      'Étard: chromyl chloride oxidises the ring –CH₃ just to –CHO (a chromium complex blocks over-oxidation to the acid) → benzaldehyde.',
    namedReactionId: 'etard',
    difficulty: 'hard',
  },
  {
    id: 'ald_013',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO →',
    conditions: 'NaBH₄, then H₃O⁺',
    correctProduct: 'CH₃CH₂OH',
    correctLabel: 'Ethanol',
    distractors: [
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'NaBH₄ is a MILD hydride source: it reduces aldehydes/ketones to alcohols but is too weak to touch a carboxylic acid or ester.',
    namedReactionId: null,
    namedReactionText: 'NaBH₄ Reduction',
    difficulty: 'medium',
  },
  {
    id: 'ald_014',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CN →',
    conditions: 'SnCl₂ + HCl, then H₃O⁺ (Stephen)',
    correctProduct: 'CH₃CHO',
    correctLabel: 'Ethanal',
    distractors: [
      { label: 'Ethanamine', value: 'CH₃CH₂NH₂' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
    ],
    explanation:
      'Stephen reduction stops a nitrile at an imine (SnCl₂/HCl) that hydrolyses to the ALDEHYDE — a route to aldehydes from nitriles.',
    namedReactionId: null,
    namedReactionText: 'Stephen Reduction',
    difficulty: 'hard',
  },

  // --- Carboxylic Acids ---
  {
    id: 'car_009',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOCH₂CH₃ + NaOH →',
    conditions: 'aqueous, heat (saponification)',
    correctProduct: 'CH₃COONa + CH₃CH₂OH',
    correctLabel: 'Sodium acetate + ethanol',
    distractors: [
      { label: 'Acetic acid + ethanol', value: 'CH₃COOH + C₂H₅OH' },
      { label: 'No change', value: 'CH₃COOCH₂CH₃' },
      { label: 'Diethyl ether', value: 'CH₃CH₂OCH₂CH₃' },
    ],
    explanation:
      'Base hydrolysis of an ester is IRREVERSIBLE (the carboxylate salt won’t re-esterify), unlike acid hydrolysis — this is the soap-making reaction.',
    namedReactionId: null,
    namedReactionText: 'Saponification',
    difficulty: 'medium',
  },

  // --- Amines ---
  {
    id: 'amn_009',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅NO₂ →',
    conditions: 'Sn + conc. HCl, then OH⁻',
    correctProduct: 'C₆H₅NH₂',
    correctLabel: 'Aniline',
    distractors: [
      { label: 'Nitrosobenzene', value: 'C₆H₅NO' },
      { label: 'Azobenzene', value: 'C₆H₅N=NC₆H₅' },
      { label: 'Phenol', value: 'C₆H₅OH' },
    ],
    explanation:
      'Sn/HCl (or Fe/HCl, H₂/Ni) reduces –NO₂ fully to –NH₂ → aniline, the standard lab route to an aromatic 1° amine.',
    namedReactionId: null,
    namedReactionText: 'Reduction of Nitro',
    difficulty: 'easy',
  },
  {
    id: 'amn_010',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅NH₂ + (CH₃CO)₂O →',
    conditions: 'acetylation',
    correctProduct: 'C₆H₅NHCOCH₃',
    correctLabel: 'Acetanilide',
    distractors: [
      { label: 'Anilinium ion', value: 'C₆H₅NH₃⁺' },
      { label: 'N,N-dimethylaniline', value: 'C₆H₅N(CH₃)₂' },
      { label: 'Azo dye', value: 'Ar-N=N-Ar' },
    ],
    explanation:
      'Acetic anhydride acetylates –NH₂ to an amide. This “protects” the ring before nitration so you get the mono-para product cleanly.',
    namedReactionId: null,
    namedReactionText: 'Acetylation of Aniline',
    difficulty: 'medium',
  },
  {
    id: 'amn_011',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'C₆H₅NH₂ + 3Br₂ →',
    conditions: 'bromine water (no catalyst)',
    correctProduct: '2,4,6-tribromoaniline↓',
    correctLabel: 'White precipitate',
    distractors: [
      { label: 'p-bromoaniline', value: 'p-Br-C₆H₄-NH₂' },
      { label: 'Bromobenzene', value: 'C₆H₅Br' },
      { label: 'Anilinium bromide', value: 'C₆H₅NH₃⁺Br⁻' },
    ],
    explanation:
      '–NH₂ is a very strong activator (o,p-directing), so in bromine water all three free positions brominate at once → insoluble 2,4,6-tribromoaniline.',
    namedReactionId: null,
    namedReactionText: 'Bromination of Aniline',
    difficulty: 'medium',
  },

  // ============================================================
  // WIDER CET COVERAGE — additions, tests & general reactions
  // ============================================================

  // --- Hydrocarbons ---
  {
    id: 'hyd_013',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₂=CH₂ + H₂ →',
    conditions: 'Ni catalyst, Δ',
    correctProduct: 'CH₃CH₃',
    correctLabel: 'Ethane',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Chloroethane', value: 'CH₃CH₂Cl' },
      { label: 'Ethyne', value: 'CH≡CH' },
    ],
    explanation:
      'Catalytic hydrogenation adds H₂ across the C=C (syn addition) over Ni/Pt/Pd → the saturated alkane.',
    namedReactionId: null,
    namedReactionText: 'Catalytic Hydrogenation',
    difficulty: 'easy',
  },
  {
    id: 'hyd_014',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH₂=CH₂ + Br₂ →',
    conditions: 'in CCl₄ (red-brown fades)',
    correctProduct: 'BrCH₂CH₂Br',
    correctLabel: '1,2-Dibromoethane',
    distractors: [
      { label: 'Bromoethane', value: 'CH₃CH₂Br' },
      { label: 'Vinyl bromide', value: 'CH₂=CHBr' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Anti addition of Br₂ across the double bond gives the vicinal dibromide; bromine’s colour fades — the classic test for unsaturation.',
    namedReactionId: null,
    namedReactionText: 'Bromine Test (unsaturation)',
    difficulty: 'easy',
  },
  {
    id: 'hyd_015',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'C₆H₆ + HNO₃ →',
    conditions: 'conc. H₂SO₄, 323–333 K',
    correctProduct: 'C₆H₅NO₂',
    correctLabel: 'Nitrobenzene',
    distractors: [
      { label: 'Aniline', value: 'C₆H₅NH₂' },
      { label: 'Phenol', value: 'C₆H₅OH' },
      { label: 'Benzenesulfonic acid', value: 'C₆H₅SO₃H' },
    ],
    explanation:
      'Electrophilic aromatic substitution: H₂SO₄ + HNO₃ make the nitronium ion NO₂⁺, which substitutes onto the ring → nitrobenzene.',
    namedReactionId: null,
    namedReactionText: 'Nitration',
    difficulty: 'medium',
  },
  {
    id: 'hyd_016',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'CH≡CH + AgNO₃ →',
    conditions: 'ammoniacal AgNO₃ (test)',
    correctProduct: 'AgC≡CAg↓',
    correctLabel: 'Silver acetylide (white ppt)',
    distractors: [
      { label: 'Ethanal', value: 'CH₃CHO' },
      { label: 'No reaction', value: '–' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
    ],
    explanation:
      'A terminal ≡C–H is weakly acidic, so it is replaced by Ag⁺ → an insoluble silver acetylide. A test for TERMINAL alkynes (ethene/internal alkynes give nothing).',
    namedReactionId: null,
    namedReactionText: 'Terminal Alkyne Test',
    difficulty: 'medium',
  },
  {
    id: 'hyd_017',
    chapter: 'hydrocarbons',
    chapterLabel: 'Hydrocarbons',
    reactant: 'C₆H₅CH₃ + Cl₂ →',
    conditions: 'UV light, boiling (no catalyst)',
    correctProduct: 'C₆H₅CH₂Cl',
    correctLabel: 'Benzyl chloride',
    distractors: [
      { label: 'o-/p-Chlorotoluene', value: 'ClC₆H₄CH₃' },
      { label: 'Benzoic acid', value: 'C₆H₅COOH' },
      { label: 'Benzaldehyde', value: 'C₆H₅CHO' },
    ],
    explanation:
      'UV light drives free-radical substitution on the SIDE CHAIN (–CH₃ → –CH₂Cl). With FeCl₃ in the dark it would substitute the ring instead.',
    namedReactionId: null,
    namedReactionText: 'Side-chain Halogenation',
    difficulty: 'hard',
  },

  // --- Haloalkanes ---
  {
    id: 'hal_012',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'C₆H₅Cl + NaOH →',
    conditions: '623 K, 300 atm, then H⁺ (Dow)',
    correctProduct: 'C₆H₅OH',
    correctLabel: 'Phenol',
    distractors: [
      { label: 'Benzene', value: 'C₆H₆' },
      { label: 'Cyclohexanol', value: 'C₆H₁₁OH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Aryl halides are very unreactive, so harsh conditions (high T & P) are needed for substitution → sodium phenoxide, then phenol on acidification (the Dow process).',
    namedReactionId: null,
    namedReactionText: 'Dow Process',
    difficulty: 'hard',
  },
  {
    id: 'hal_013',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + AgNO₂ →',
    conditions: 'silver nitrite',
    correctProduct: 'CH₃CH₂NO₂',
    correctLabel: 'Nitroethane (N-attack)',
    distractors: [
      { label: 'Ethyl nitrite', value: 'CH₃CH₂ONO' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethanamine', value: 'CH₃CH₂NH₂' },
    ],
    explanation:
      'AgNO₂ is covalent, so nitrogen attacks → the nitroalkane R–NO₂. (Ionic KNO₂ would let oxygen attack, giving the alkyl nitrite R–O–N=O.)',
    namedReactionId: null,
    namedReactionText: 'Ambident Nucleophile (NO₂⁻)',
    difficulty: 'hard',
  },
  {
    id: 'hal_014',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Cl + H₂ →',
    conditions: 'Zn / HCl (or LiAlH₄)',
    correctProduct: 'CH₃CH₃',
    correctLabel: 'Ethane',
    distractors: [
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
      { label: 'Ethanamine', value: 'CH₃CH₂NH₂' },
    ],
    explanation:
      'The C–X bond is reduced and replaced by C–H, so the haloalkane becomes the parent alkane (the halogen is removed).',
    namedReactionId: null,
    namedReactionText: 'Reduction of Haloalkane',
    difficulty: 'medium',
  },
  {
    id: 'hal_015',
    chapter: 'haloalkanes',
    chapterLabel: 'Haloalkanes & Haloarenes',
    reactant: 'CH₃CH₂Br + AgNO₃ →',
    conditions: 'alcoholic AgNO₃ (test)',
    correctProduct: 'AgBr↓',
    correctLabel: 'Pale-yellow precipitate',
    distractors: [
      { label: 'White ppt', value: 'AgCl↓' },
      { label: 'Deep-yellow ppt', value: 'AgI↓' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Alcoholic AgNO₃ ionises the C–X bond; the halide drops out as a silver halide whose colour identifies it — AgCl white, AgBr pale-yellow, AgI yellow.',
    namedReactionId: null,
    namedReactionText: 'Silver Halide Test',
    difficulty: 'medium',
  },

  // --- Alcohols, Phenols & Ethers ---
  {
    id: 'alc_011',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: '2 CH₃CH₂OH + 2 Na →',
    conditions: 'active metal',
    correctProduct: '2 CH₃CH₂ONa + H₂↑',
    correctLabel: 'Sodium ethoxide + H₂',
    distractors: [
      { label: 'Ethanal + H₂', value: 'CH₃CHO + H₂' },
      { label: 'Ethene', value: 'CH₂=CH₂' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'The O–H of an alcohol is weakly acidic, so Na displaces it as H₂ gas, leaving the sodium alkoxide — brisk effervescence confirms the –OH.',
    namedReactionId: null,
    namedReactionText: 'Reaction with Sodium',
    difficulty: 'easy',
  },
  {
    id: 'alc_012',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'CH₃-O-CH₂CH₃ + HI →',
    conditions: 'excess HI, Δ',
    correctProduct: 'CH₃I + CH₃CH₂OH',
    correctLabel: 'Iodomethane + ethanol',
    distractors: [
      { label: 'Iodoethane + methanol', value: 'CH₃CH₂I + CH₃OH' },
      { label: 'Two alcohols', value: 'CH₃OH + CH₃CH₂OH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'HI cleaves the C–O bond and I⁻ attacks the SMALLER, less-hindered alkyl group (SN2) → it becomes the iodide; the bigger group leaves as the alcohol.',
    namedReactionId: null,
    namedReactionText: 'Ether Cleavage (HI)',
    difficulty: 'hard',
  },
  {
    id: 'alc_013',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅OH + FeCl₃ →',
    conditions: 'neutral FeCl₃ (test)',
    correctProduct: 'violet colour',
    correctLabel: 'Fe(III)–phenolate complex',
    distractors: [
      { label: 'like an acid', value: 'brisk effervescence' },
      { label: 'neutral', value: 'no change' },
      { label: 'iodoform', value: 'yellow ppt' },
    ],
    explanation:
      'Phenols form a coloured (violet) complex with neutral FeCl₃ — a confirmatory test for the phenolic –OH; ordinary alcohols give no colour.',
    namedReactionId: null,
    namedReactionText: 'Ferric Chloride Test',
    difficulty: 'easy',
  },
  {
    id: 'alc_014',
    chapter: 'alcohols',
    chapterLabel: 'Alcohols, Phenols & Ethers',
    reactant: 'C₆H₅OH + NaOH →',
    conditions: 'aqueous',
    correctProduct: 'C₆H₅ONa + H₂O',
    correctLabel: 'Sodium phenoxide',
    distractors: [
      { label: 'phenol is neutral', value: 'no reaction' },
      { label: 'Sodium benzoate', value: 'C₆H₅COONa' },
      { label: 'Salicylic acid', value: 'o-HO-C₆H₄-COOH' },
    ],
    explanation:
      'Phenol is acidic enough to react with the strong base NaOH → a soluble salt. But it does NOT react with NaHCO₃ — which is how you tell phenols from carboxylic acids.',
    namedReactionId: null,
    namedReactionText: 'Acidity of Phenol',
    difficulty: 'medium',
  },

  // --- Aldehydes & Ketones ---
  {
    id: 'ald_015',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + HCN →',
    conditions: 'trace base',
    correctProduct: 'CH₃CH(OH)CN',
    correctLabel: 'Cyanohydrin',
    distractors: [
      { label: 'Propanenitrile', value: 'CH₃CH₂CN' },
      { label: 'Acetamide', value: 'CH₃CONH₂' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Nucleophilic addition: CN⁻ adds to the carbonyl carbon and H to the oxygen → a cyanohydrin (–OH and –CN on the same carbon).',
    namedReactionId: null,
    namedReactionText: 'Cyanohydrin Formation',
    difficulty: 'medium',
  },
  {
    id: 'ald_016',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + NaHSO₃ →',
    conditions: 'saturated bisulfite',
    correctProduct: 'CH₃CH(OH)SO₃Na',
    correctLabel: 'Bisulfite adduct (white)',
    distractors: [
      { label: 'Sodium acetate', value: 'CH₃COONa' },
      { label: 'Ethanol', value: 'CH₃CH₂OH' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Aldehydes and methyl ketones add NaHSO₃ to give a crystalline white adduct — used to purify carbonyl compounds (the step is reversible with acid/base).',
    namedReactionId: null,
    namedReactionText: 'Bisulfite Addition',
    difficulty: 'medium',
  },
  {
    id: 'ald_017',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃COCH₃ + 2,4-DNP →',
    conditions: "Brady's reagent",
    correctProduct: 'orange ppt',
    correctLabel: '2,4-DNP derivative',
    distractors: [
      { label: "Tollens'", value: 'silver mirror' },
      { label: "Fehling's", value: 'brick-red ppt' },
      { label: 'no carbonyl', value: 'no reaction' },
    ],
    explanation:
      'Both aldehydes AND ketones condense with 2,4-dinitrophenylhydrazine to give an orange/yellow precipitate — a general test for the >C=O group.',
    namedReactionId: null,
    namedReactionText: '2,4-DNP Test',
    difficulty: 'easy',
  },
  {
    id: 'ald_018',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + H₂ →',
    conditions: 'Ni catalyst',
    correctProduct: 'CH₃CH₂OH',
    correctLabel: 'Ethanol (1° alcohol)',
    distractors: [
      { label: 'Ethanoic acid', value: 'CH₃COOH' },
      { label: 'Ethane', value: 'CH₃CH₃' },
      { label: 'Propan-2-ol', value: 'CH₃CH(OH)CH₃' },
    ],
    explanation:
      'Catalytic hydrogenation adds H₂ across C=O, reducing an aldehyde to a 1° alcohol. (A ketone would give a 2° alcohol.)',
    namedReactionId: null,
    namedReactionText: 'Catalytic Reduction',
    difficulty: 'easy',
  },
  {
    id: 'ald_019',
    chapter: 'aldehydes',
    chapterLabel: 'Aldehydes & Ketones',
    reactant: 'CH₃CHO + NH₂OH →',
    conditions: 'hydroxylamine',
    correctProduct: 'CH₃CH=NOH',
    correctLabel: 'Acetaldoxime',
    distractors: [
      { label: 'Hydrazone', value: 'CH₃CH=NNH₂' },
      { label: 'Acetamide', value: 'CH₃CONH₂' },
      { label: 'Amino alcohol', value: 'CH₃CH(OH)NH₂' },
    ],
    explanation:
      'Hydroxylamine condenses with the carbonyl (addition then loss of water) to give an oxime, >C=N–OH.',
    namedReactionId: null,
    namedReactionText: 'Oxime Formation',
    difficulty: 'medium',
  },

  // --- Carboxylic Acids ---
  {
    id: 'car_010',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: 'CH₃COOH + PCl₅ →',
    conditions: 'room temp',
    correctProduct: 'CH₃COCl',
    correctLabel: 'Ethanoyl chloride (+ POCl₃, HCl)',
    distractors: [
      { label: 'Chloroethane', value: 'CH₃CH₂Cl' },
      { label: 'Ethanal', value: 'CH₃CHO' },
      { label: 'Acetic anhydride', value: '(CH₃CO)₂O' },
    ],
    explanation:
      'PCl₅ swaps the acid’s –OH for –Cl to give the acid chloride; POCl₃ and HCl are the by-products.',
    namedReactionId: null,
    namedReactionText: 'Acid Chloride (PCl₅)',
    difficulty: 'medium',
  },
  {
    id: 'car_011',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: '2 CH₃COOH →',
    conditions: 'P₂O₅ (dehydrating), Δ',
    correctProduct: '(CH₃CO)₂O',
    correctLabel: 'Acetic anhydride',
    distractors: [
      { label: 'Acetone', value: 'CH₃COCH₃' },
      { label: 'Methyl ethanoate', value: 'CH₃COOCH₃' },
      { label: 'Ethanoyl chloride', value: 'CH₃COCl' },
    ],
    explanation:
      'A dehydrating agent (P₂O₅) pulls water out of two acid molecules, joining them as the acid anhydride.',
    namedReactionId: null,
    namedReactionText: 'Anhydride Formation',
    difficulty: 'medium',
  },
  {
    id: 'car_012',
    chapter: 'carboxylic',
    chapterLabel: 'Carboxylic Acids',
    reactant: '2 CH₃COOH + 2 Na →',
    conditions: 'active metal',
    correctProduct: '2 CH₃COONa + H₂↑',
    correctLabel: 'Sodium acetate + H₂',
    distractors: [
      { label: 'no gas evolved', value: 'CH₃COONa only' },
      { label: 'reduction', value: 'CH₃CHO + H₂' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'The acidic –COOH liberates H₂ with reactive metals like Na, forming the carboxylate salt — evidence of its acidic character.',
    namedReactionId: null,
    namedReactionText: 'Reaction with Sodium',
    difficulty: 'easy',
  },

  // --- Amines ---
  {
    id: 'amn_012',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃CH₂NH₂ + HNO₂ →',
    conditions: 'NaNO₂ + HCl, cold',
    correctProduct: 'CH₃CH₂OH + N₂↑',
    correctLabel: 'Ethanol + N₂ (brisk fizz)',
    distractors: [
      { label: 'stable salt', value: 'CH₃CH₂N₂⁺Cl⁻' },
      { label: 'Nitrosamine', value: 'CH₃CH₂NH-N=O' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Aliphatic 1° amines form a very unstable diazonium salt that instantly breaks down to the alcohol with brisk N₂ — unlike ARYL amines, whose salt is stable at 0–5 °C.',
    namedReactionId: null,
    namedReactionText: 'Deamination (aliphatic)',
    difficulty: 'hard',
  },
  {
    id: 'amn_013',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: '(CH₃)₂NH + HNO₂ →',
    conditions: 'NaNO₂ + HCl',
    correctProduct: '(CH₃)₂N-N=O',
    correctLabel: 'N-Nitrosamine (yellow oil)',
    distractors: [
      { label: 'diazonium', value: '(CH₃)₂N₂⁺' },
      { label: 'ammonium salt', value: '(CH₃)₂NH₂⁺Cl⁻' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'A 2° amine + nitrous acid gives a yellow oily N-nitrosamine — distinct from 1° amines (→ alcohol + N₂) and 3° amines (no visible reaction).',
    namedReactionId: null,
    namedReactionText: 'Nitrosamine Formation',
    difficulty: 'hard',
  },
  {
    id: 'amn_014',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃NH₂ + HCl →',
    conditions: 'room temp',
    correctProduct: 'CH₃NH₃⁺Cl⁻',
    correctLabel: 'Methylammonium chloride',
    distractors: [
      { label: 'substitution', value: 'CH₃Cl + NH₃' },
      { label: 'N-chloroamine', value: 'CH₃NHCl' },
      { label: 'No reaction', value: '–' },
    ],
    explanation:
      'Amines are basic (lone pair on N), so they react with acids to form water-soluble ammonium salts.',
    namedReactionId: null,
    namedReactionText: 'Basicity of Amines',
    difficulty: 'easy',
  },
  {
    id: 'amn_015',
    chapter: 'amines',
    chapterLabel: 'Amines',
    reactant: 'CH₃NH₂ + CH₃I →',
    conditions: 'then base',
    correctProduct: '(CH₃)₂NH',
    correctLabel: 'Dimethylamine (2°)',
    distractors: [
      { label: 'no change', value: 'CH₃NH₂' },
      { label: 'quaternary salt', value: '(CH₃)₄N⁺I⁻' },
      { label: 'Methanol', value: 'CH₃OH' },
    ],
    explanation:
      'An amine is a nucleophile, so it does SN2 on the alkyl halide to give the next-higher amine. Excess CH₃I drives it on to 3° amine and the quaternary salt.',
    namedReactionId: null,
    namedReactionText: 'Hofmann Alkylation',
    difficulty: 'medium',
  },
]

// --- helpers ---------------------------------------------------------------

export const reactionsByChapter = (chapterKey) =>
  REACTIONS.filter((r) => r.chapter === chapterKey)

export const reactionById = (id) => REACTIONS.find((r) => r.id === id)

// Fisher–Yates shuffle (pure, takes a copy)
export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build the 4 shuffled options for a reaction (1 correct + 3 distractors).
export function buildOptions(reaction) {
  const options = [
    { label: reaction.correctLabel, value: reaction.correctProduct, correct: true },
    ...reaction.distractors.map((d) => ({ label: d.label, value: d.value, correct: false })),
  ]
  return shuffle(options)
}
