// IUPAC Challenge — hard nomenclature questions.
// Show a structure (condensed formula), pick the correct IUPAC name from 4.
// Distractors are the names students actually write wrong: bad locant direction,
// wrong parent chain, wrong functional-group priority, wrong alphabetical order.
// Every explanation states the rule that decides the answer.

import { shuffle } from './reactions.js'

export const IUPAC_QUESTIONS = [
  {
    id: 'iup_001',
    structure: '(CH₃)₂CH–CH₂–C(CH₃)₃',
    note: 'pick the longest chain + lowest locants',
    correctName: '2,2,4-trimethylpentane',
    distractors: ['2,4,4-trimethylpentane', '2,2,4-trimethylhexane', '2,2-dimethyl-4-methylpentane'],
    explanation:
      'Longest chain = 5 C (pentane). Number for the lowest locant set {2,2,4}, not {2,4,4}. Three methyls → 2,2,4-trimethylpentane (iso-octane).',
    difficulty: 'hard',
  },
  {
    id: 'iup_002',
    structure: '(CH₃CH₂)₂CH–CH₃',
    note: 'the longest chain isn’t the one drawn straight',
    correctName: '3-methylpentane',
    distractors: ['2-ethylbutane', '3-methylbutane', '2-methylpentane'],
    explanation:
      'Run the chain through both ethyl groups → 5 C (pentane), with a methyl on C3. “2-ethylbutane” is the classic trap — you must take the LONGEST chain.',
    difficulty: 'hard',
  },
  {
    id: 'iup_003',
    structure: 'HO–CH₂–CH₂–COOH',
    note: 'two functional groups — which wins?',
    correctName: '3-hydroxypropanoic acid',
    distractors: ['3-hydroxypropan-1-oic acid', '1-carboxyethanol', 'propane-1-ol-3-oic acid'],
    explanation:
      '–COOH outranks –OH, so the acid is the principal group (suffix -oic acid, carboxyl = C1). The –OH becomes a “hydroxy” prefix at C3.',
    difficulty: 'hard',
  },
  {
    id: 'iup_004',
    structure: 'CH₃–CO–CH₂–CHO',
    note: 'aldehyde vs ketone priority',
    correctName: '3-oxobutanal',
    distractors: ['3-oxobutanone', '2-oxobutanal', '1-oxobutan-3-one'],
    explanation:
      'The aldehyde is senior to the ketone, so –CHO is C1 and the suffix is -al (butanal). The ketone becomes “oxo” at C3 → 3-oxobutanal.',
    difficulty: 'hard',
  },
  {
    id: 'iup_005',
    structure: 'CH₃–CH₂–COO–CH₃',
    note: 'name this ester',
    correctName: 'methyl propanoate',
    distractors: ['propyl methanoate', 'ethyl ethanoate', 'methyl ethanoate'],
    explanation:
      'Ester = alkyl alkanoate. Acyl part CH₃CH₂CO– (3 C) → propanoate; the O-alkyl is CH₃ → methyl. So methyl propanoate.',
    difficulty: 'medium',
  },
  {
    id: 'iup_006',
    structure: 'CH₂=CH–CH₂–CH₂–OH',
    note: '–OH takes the lowest locant',
    correctName: 'but-3-en-1-ol',
    distractors: ['but-1-en-4-ol', 'but-3-enol', 'but-3-en-4-ol'],
    explanation:
      '–OH is the principal group, so it gets the lowest locant (C1). Numbering starts from the OH end → but-3-en-1-ol, not but-1-en-4-ol.',
    difficulty: 'hard',
  },
  {
    id: 'iup_007',
    structure: 'HC≡C–CH₂–CH=CH₂',
    note: 'ene vs yne when locants tie',
    correctName: 'pent-1-en-4-yne',
    distractors: ['pent-4-en-1-yne', 'pent-1-yn-4-ene', 'penta-1-en-4-yne'],
    explanation:
      'Locant set is {1,4} from either end → a tie. The rule: the DOUBLE bond gets the lower number → pent-1-en-4-yne.',
    difficulty: 'hard',
  },
  {
    id: 'iup_008',
    structure: 'cyclohexane with –CH₂CH₃ and –CH₃ on adjacent C',
    note: 'who gets C1?',
    correctName: '1-ethyl-2-methylcyclohexane',
    distractors: ['1-methyl-2-ethylcyclohexane', '2-ethyl-1-methylcyclohexane', '1-ethyl-6-methylcyclohexane'],
    explanation:
      'Locant set {1,2} both ways → tie broken alphabetically: “ethyl” precedes “methyl”, so ethyl is C1 → 1-ethyl-2-methylcyclohexane.',
    difficulty: 'hard',
  },
  {
    id: 'iup_009',
    structure: 'benzaldehyde ring: –OH at 4, –OCH₃ at 3 (vanillin)',
    note: '–CHO fixes C1',
    correctName: '4-hydroxy-3-methoxybenzaldehyde',
    distractors: ['3-hydroxy-4-methoxybenzaldehyde', '4-methoxy-3-hydroxybenzaldehyde', '2-hydroxy-3-methoxybenzaldehyde'],
    explanation:
      '–CHO is the principal group (benzaldehyde, C1). Cite the two prefixes alphabetically — hydroxy before methoxy → 4-hydroxy-3-methoxybenzaldehyde (vanillin).',
    difficulty: 'hard',
  },
  {
    id: 'iup_010',
    structure: 'H₂N–CH₂–CH₂–COOH',
    note: 'acid vs amine priority',
    correctName: '3-aminopropanoic acid',
    distractors: ['1-amino-2-carboxyethane', '3-aminopropan-1-oic acid', 'propan-1-oic-3-amine'],
    explanation:
      '–COOH outranks –NH₂. The acid is the suffix (C1); the amino group is a prefix at C3 → 3-aminopropanoic acid (β-alanine).',
    difficulty: 'hard',
  },
  {
    id: 'iup_011',
    structure: 'CH₃–CHCl–CH(CH₃)–CH₂–CH₃',
    note: 'lowest locants + alphabetical citation',
    correctName: '2-chloro-3-methylpentane',
    distractors: ['4-chloro-3-methylpentane', '3-methyl-2-chloropentane', '2-chloro-3-methylhexane'],
    explanation:
      'Lowest locant set is {2,3} (not {3,4}). Cite substituents alphabetically — chloro before methyl → 2-chloro-3-methylpentane.',
    difficulty: 'medium',
  },
  {
    id: 'iup_012',
    structure: 'CH₃–CH₂–O–CH(CH₃)₂',
    note: 'bigger group is the parent',
    correctName: '2-ethoxypropane',
    distractors: ['1-ethoxypropane', 'isopropoxyethane', '2-propoxyethane'],
    explanation:
      'The larger chain (propane) is the parent; the smaller –OCH₂CH₃ is an “ethoxy” substituent at C2 → 2-ethoxypropane.',
    difficulty: 'medium',
  },
  {
    id: 'iup_013',
    structure: 'CH₂=C(CH₃)–CH=CH₂',
    note: 'diene + substituent (isoprene)',
    correctName: '2-methylbuta-1,3-diene',
    distractors: ['3-methylbuta-1,3-diene', '2-methylbut-1,3-diene', '2-methylbuta-1,2-diene'],
    explanation:
      'Parent buta-1,3-diene (lowest locants {1,3} for the two C=C). Methyl at C2 → 2-methylbuta-1,3-diene (isoprene).',
    difficulty: 'hard',
  },
  {
    id: 'iup_014',
    structure: 'CH₃–CH₂–CO–CH₂–CH₂–CH₃',
    note: 'lowest locant to C=O',
    correctName: 'hexan-3-one',
    distractors: ['hexan-4-one', 'hexan-2-one', 'pentan-3-one'],
    explanation:
      'Number from the end nearer the carbonyl so C=O gets the lower locant: C3, not C4 → hexan-3-one.',
    difficulty: 'medium',
  },
  {
    id: 'iup_015',
    structure: 'CH₃–CO–CH₂–COOH',
    note: 'acid + ketone (acetoacetic acid)',
    correctName: '3-oxobutanoic acid',
    distractors: ['3-ketobutanoic acid', '2-oxobutanoic acid', '4-oxobutanoic acid'],
    explanation:
      '–COOH is senior (C1, suffix -oic acid). The ketone is named “oxo” (not “keto”) at C3 → 3-oxobutanoic acid.',
    difficulty: 'hard',
  },
  {
    id: 'iup_016',
    structure: 'N≡C–CH₂–CH₂–CH₃',
    note: 'the nitrile C counts in the chain',
    correctName: 'butanenitrile',
    distractors: ['propanenitrile', 'propyl cyanide', 'butannitrile'],
    explanation:
      'The –C≡N carbon is included as C1, so the chain is 4 C → butanenitrile (not propanenitrile).',
    difficulty: 'medium',
  },
  {
    id: 'iup_017',
    structure: 'CH₃–CH=CH–CH₃  (both CH₃ on the same side)',
    note: 'assign the geometry',
    correctName: '(Z)-but-2-ene',
    distractors: ['(E)-but-2-ene', '(Z)-but-1-ene', 'but-2-ene'],
    explanation:
      'The two higher-priority groups (the CH₃’s) are on the same side → cis → (Z). So (Z)-but-2-ene.',
    difficulty: 'hard',
  },
  {
    id: 'iup_018',
    structure: 'CH₃–CH(CH₃)–CH(CH₃)–CH₂–CH₂–CH₃',
    note: 'number from the nearer end',
    correctName: '2,3-dimethylhexane',
    distractors: ['4,5-dimethylhexane', '2,3-dimethylpentane', '2-methyl-3-methylhexane'],
    explanation:
      'Hexane backbone (6 C); lowest locant set {2,3} (number from the substituent end). Two methyls → 2,3-dimethylhexane.',
    difficulty: 'medium',
  },
  {
    id: 'iup_019',
    structure: 'cyclohexane with –OH at 1 and –CH₃ at 2',
    note: '–OH is principal',
    correctName: '2-methylcyclohexan-1-ol',
    distractors: ['1-methylcyclohexan-2-ol', '6-methylcyclohexan-1-ol', '3-methylcyclohexan-1-ol'],
    explanation:
      '–OH is the principal group → C1. Number toward the methyl so it gets the lowest locant (2, not 6) → 2-methylcyclohexan-1-ol.',
    difficulty: 'hard',
  },
  {
    id: 'iup_020',
    structure: 'CH₃–CH₂–CONH₂',
    note: 'name this amide',
    correctName: 'propanamide',
    distractors: ['ethanamide', 'propan-1-amine', 'propanenitrile'],
    explanation:
      'The –CONH₂ carbon is C1; with 3 carbons the chain is propane → propanamide (amide suffix -amide).',
    difficulty: 'medium',
  },

  // ---------- toughest set ----------
  {
    id: 'iup_021',
    structure: '7-C bridged ring; bridges of 2, 2 & 1 C between two bridgeheads',
    note: 'name the bridged bicyclic',
    correctName: 'bicyclo[2.2.1]heptane',
    distractors: ['bicyclo[2.2.2]octane', 'bicyclo[2.1.1]hexane', 'spiro[2.2.1]heptane'],
    explanation:
      'Two bridgehead carbons joined by three bridges of 2, 2 and 1 C → descriptors in DECREASING order [2.2.1]; 7 C total → bicyclo[2.2.1]heptane (norbornane).',
    difficulty: 'hard',
  },
  {
    id: 'iup_022',
    structure: 'two rings (5- & 6-membered) joined at ONE shared C',
    note: 'a single common atom',
    correctName: 'spiro[4.5]decane',
    distractors: ['spiro[5.4]decane', 'bicyclo[4.5.0]decane', 'spiro[4.5]nonane'],
    explanation:
      'One shared atom = spiro. Count atoms in each ring excluding the shared one, smaller first → [4.5] (numbers ASCEND); 4+5+1 = 10 C → spiro[4.5]decane.',
    difficulty: 'hard',
  },
  {
    id: 'iup_023',
    structure: 'C₆H₁₁–COOH',
    note: '–COOH attached to a ring',
    correctName: 'cyclohexanecarboxylic acid',
    distractors: ['cyclohexanoic acid', '1-carboxycyclohexane', 'hexanecarboxylic acid'],
    explanation:
      'A –COOH on a ring cannot be counted into the ring name, so the suffix is -carboxylic acid → cyclohexanecarboxylic acid (not “cyclohexanoic acid”).',
    difficulty: 'hard',
  },
  {
    id: 'iup_024',
    structure: 'C₆H₄(COOH)₂  (the two –COOH adjacent)',
    note: 'ortho di-acid on benzene',
    correctName: 'benzene-1,2-dicarboxylic acid',
    distractors: ['benzene-1,3-dicarboxylic acid', 'benzene-1,4-dicarboxylic acid', '1,2-dicarboxybenzene'],
    explanation:
      'Two ring –COOH → suffix -dicarboxylic acid with locants; adjacent (ortho) = 1,2 → benzene-1,2-dicarboxylic acid (phthalic acid).',
    difficulty: 'hard',
  },
  {
    id: 'iup_025',
    structure: 'HOOC–CH₂–CH₂–COOH',
    note: 'open-chain di-acid',
    correctName: 'butanedioic acid',
    distractors: ['propanedioic acid', 'pentanedioic acid', 'butane-1,4-dioic acid'],
    explanation:
      'Two terminal –COOH on a 4-C chain → -dioic acid. The carboxyls must be C1 and C4 (terminal), so locants are dropped → butanedioic acid (succinic acid).',
    difficulty: 'hard',
  },
  {
    id: 'iup_026',
    structure: 'CH₃–CO–CH₂–CO–CH₃',
    note: 'di-ketone',
    correctName: 'pentane-2,4-dione',
    distractors: ['pentane-1,3-dione', 'pentane-2,4-dial', 'hexane-2,4-dione'],
    explanation:
      'Two C=O on a 5-C chain at the lowest locants {2,4} → pentane-2,4-dione (acetylacetone).',
    difficulty: 'medium',
  },
  {
    id: 'iup_027',
    structure: 'OHC–CH₂–CH₂–CH₂–CHO',
    note: 'di-aldehyde',
    correctName: 'pentanedial',
    distractors: ['butanedial', 'pentane-1,5-dial', 'pentanedione'],
    explanation:
      'Two terminal –CHO on a 5-C chain → -dial; the CHO carbons are necessarily C1 and C5, so locants are omitted → pentanedial (glutaraldehyde).',
    difficulty: 'hard',
  },
  {
    id: 'iup_028',
    structure: 'CH₃–CH(OH)–CH₂–CH=CH₂',
    note: '–OH beats C=C for the low locant',
    correctName: 'pent-4-en-2-ol',
    distractors: ['pent-1-en-4-ol', 'pent-4-ene-2-ol', 'hex-4-en-2-ol'],
    explanation:
      '–OH is the principal group, so it takes the lowest locant (C2) even though that gives the C=C the higher number (4) → pent-4-en-2-ol.',
    difficulty: 'hard',
  },
  {
    id: 'iup_029',
    structure: 'CH₂=CH–CO–CH₃',
    note: 'C=O is principal',
    correctName: 'but-3-en-2-one',
    distractors: ['but-1-en-3-one', 'but-3-en-2-ol', 'butan-2-one'],
    explanation:
      'The ketone is the principal group → lowest locant (C2); numbering from that end puts the C=C at C3 → but-3-en-2-one (methyl vinyl ketone).',
    difficulty: 'hard',
  },
  {
    id: 'iup_030',
    structure: 'cyclohexene ring: C=O at 1, ring C=C at 2–3',
    note: 'ring enone',
    correctName: 'cyclohex-2-en-1-one',
    distractors: ['cyclohex-1-en-3-one', 'cyclohex-2-en-1-ol', 'cyclohexenone'],
    explanation:
      'The ketone is principal → C1. Number so the C=C gets the lowest locant (2) → cyclohex-2-en-1-one.',
    difficulty: 'hard',
  },
  {
    id: 'iup_031',
    structure: 'CH₃CH₂–CO–NH–CH₃',
    note: 'substituent on nitrogen',
    correctName: 'N-methylpropanamide',
    distractors: ['N-methylethanamide', 'propanamide', 'methyl propanamide'],
    explanation:
      'Parent acyl = propanamide (3 C). The methyl sits on nitrogen, shown by the italic locant N- → N-methylpropanamide.',
    difficulty: 'hard',
  },
  {
    id: 'iup_032',
    structure: 'HO–CH₂–CH₂–CO–CH₃',
    note: 'ketone vs alcohol priority',
    correctName: '4-hydroxybutan-2-one',
    distractors: ['2-hydroxybutan-4-one', '4-oxobutan-2-ol', '1-hydroxybutan-3-one'],
    explanation:
      'Ketone outranks alcohol, so C=O is the suffix (-one, lowest locant C2) and –OH becomes “hydroxy” at C4 → 4-hydroxybutan-2-one.',
    difficulty: 'hard',
  },
  {
    id: 'iup_033',
    structure: 'CH₂=CH–CH₂–CH₂–Br',
    note: 'double bond vs halogen',
    correctName: '4-bromobut-1-ene',
    distractors: ['1-bromobut-3-ene', '4-bromobut-2-ene', '1-bromobutene'],
    explanation:
      'A halogen is only a prefix, so the C=C (suffix -ene) takes the lowest locant (C1); bromo is then at C4 → 4-bromobut-1-ene.',
    difficulty: 'medium',
  },
  {
    id: 'iup_034',
    structure: 'CH₃–CHBr–CHCl–CH₃',
    note: 'locant tie → alphabetical',
    correctName: '2-bromo-3-chlorobutane',
    distractors: ['3-bromo-2-chlorobutane', '2-chloro-3-bromobutane', '2-bromo-3-chloropropane'],
    explanation:
      'Locant set {2,3} both ways → the tie goes to the substituent first alphabetically (bromo) getting the lower number → 2-bromo-3-chlorobutane.',
    difficulty: 'hard',
  },
  {
    id: 'iup_035',
    structure: 'CH₂=CH–CH(CH₃)–CH₂–OH',
    note: 'run the chain through the –OH',
    correctName: '2-methylbut-3-en-1-ol',
    distractors: ['3-methylbut-1-en-4-ol', '2-methylbut-3-en-4-ol', '2-methylpent-3-en-1-ol'],
    explanation:
      '–OH is principal → C1. A 4-C chain (butenol) with the C=C at C3 and a methyl at C2 → 2-methylbut-3-en-1-ol.',
    difficulty: 'hard',
  },
  {
    id: 'iup_036',
    structure: 'Br–CH=CH–Cl  (Br and Cl on OPPOSITE sides)',
    note: 'assign E/Z by CIP priority',
    correctName: '(E)-1-bromo-2-chloroethene',
    distractors: ['(Z)-1-bromo-2-chloroethene', '(E)-2-bromo-1-chloroethene', '(E)-1-bromo-2-chloroethane'],
    explanation:
      'On C1 the higher-priority group is Br; on C2 it is Cl. They are on opposite sides → E. Alphabetically bromo precedes chloro → (E)-1-bromo-2-chloroethene.',
    difficulty: 'hard',
  },
  {
    id: 'iup_037',
    structure: 'CH₃–CO–O–CO–CH₃',
    note: 'symmetrical anhydride',
    correctName: 'ethanoic anhydride',
    distractors: ['propanoic anhydride', 'ethanoyl ethanoate', 'ethanoic acid'],
    explanation:
      'A symmetrical acid anhydride is named “<acid stem> anhydride”: from ethanoic acid → ethanoic anhydride (acetic anhydride).',
    difficulty: 'medium',
  },
  {
    id: 'iup_038',
    structure: 'CH₃–CH₂–N(CH₃)₂',
    note: 'two groups on nitrogen',
    correctName: 'N,N-dimethylethanamine',
    distractors: ['N,N-dimethylmethanamine', 'trimethylamine', 'N-ethyldimethylamine'],
    explanation:
      'Longest chain bearing N = ethanamine (C2). Two methyls on nitrogen → N,N-dimethyl → N,N-dimethylethanamine.',
    difficulty: 'hard',
  },
  {
    id: 'iup_039',
    structure: '(CH₃)₂CH–COO–CH₂CH₃',
    note: 'ester of a branched acid',
    correctName: 'ethyl 2-methylpropanoate',
    distractors: ['ethyl 2-methylbutanoate', 'propyl 2-methylpropanoate', 'ethyl 3-methylpropanoate'],
    explanation:
      'Acyl part (CH₃)₂CHCO– = 2-methylpropanoate; the O-alkyl is ethyl → ethyl 2-methylpropanoate.',
    difficulty: 'hard',
  },
  {
    id: 'iup_040',
    structure: 'C₅H₉–CHO',
    note: '–CHO on a ring',
    correctName: 'cyclopentanecarbaldehyde',
    distractors: ['cyclopentanal', 'cyclohexanecarbaldehyde', '1-formylcyclopentane'],
    explanation:
      'A –CHO attached to a ring uses the suffix -carbaldehyde (its carbon is not part of the ring) → cyclopentanecarbaldehyde.',
    difficulty: 'hard',
  },
]

// 1 correct + 3 distractors, shuffled
export function buildNameOptions(q) {
  const opts = [
    { name: q.correctName, correct: true },
    ...q.distractors.map((name) => ({ name, correct: false })),
  ]
  return shuffle(opts)
}

// build a fresh round (shuffled subset)
export function buildIupacRound(size = 10) {
  return shuffle(IUPAC_QUESTIONS)
    .slice(0, size)
    .map((q) => ({ q, options: buildNameOptions(q) }))
}

export const TOTAL_IUPAC = IUPAC_QUESTIONS.length
