import type { Move } from '../types/game';

export const MOVES: Record<string, Move> = {
  teasing_words: {
    id: 'teasing_words',
    name: 'Teasing Words',
    description: 'Filthy praise and mockery that worm under the skin.',
    arousal: 12,
    selfRisk: 2,
    tags: ['verbal', 'humiliation'],
    narratives: [
      '{actor} leans close and murmurs degrading praise until {target} shivers.',
      '{actor} narrates exactly how needy {target} looks — and means every word.',
      'Soft, cruel laughter from {actor} makes {target}\'s pulse jump.',
    ],
  },
  edge_stroke: {
    id: 'edge_stroke',
    name: 'Edge Stroke',
    description: 'Slow, deliberate touch that builds pressure without mercy.',
    arousal: 18,
    selfRisk: 6,
    tags: ['physical', 'edging'],
    narratives: [
      '{actor} works {target} with maddeningly slow strokes, stopping just shy of the peak.',
      'Fingers tease and retreat; {target} bucks helplessly under {actor}\'s control.',
      '{actor} keeps {target} trembling on the brink, smirking at every aborted moan.',
    ],
  },
  boot_worship: {
    id: 'boot_worship',
    name: 'Boot Worship',
    description: 'Force attention down — leather, polish, and shame.',
    arousal: 14,
    selfRisk: 4,
    tags: ['humiliation', 'fetish'],
    narratives: [
      '{actor} plants a polished boot and makes {target} confess how good it feels to kneel.',
      'The scent of leather and the weight of {actor}\'s heel leave {target} aching.',
      '{actor} taps {target}\'s chin up from the floor only to push them back down.',
    ],
  },
  ruined_touch: {
    id: 'ruined_touch',
    name: 'Ruined Touch',
    description: 'Bring them right to the edge, then deny the finish.',
    arousal: 22,
    selfRisk: 8,
    tags: ['denial', 'cruel'],
    narratives: [
      '{actor} drives {target} to the cliff\'s edge — then snatches the pleasure away.',
      'A ruined almost-climax leaves {target} gasping; {actor} only laughs.',
      '{actor} whispers "not yet" while {target}\'s body betrays them completely.',
    ],
  },
  strap_thrust: {
    id: 'strap_thrust',
    name: 'Strap Thrust',
    description: 'Deep, rhythmic dominance that leaves no room to think.',
    arousal: 24,
    selfRisk: 10,
    tags: ['physical', 'penetration'],
    narratives: [
      '{actor} sets a ruthless rhythm with the strap until {target} can only cling and moan.',
      'Each thrust from {actor} knocks another coherent thought out of {target}.',
      '{actor} pins {target} and fucks them like a toy that exists to be used.',
    ],
  },
  mind_break: {
    id: 'mind_break',
    name: 'Mind Break',
    description: 'Psychological assault — ownership, names, and total surrender.',
    arousal: 20,
    selfRisk: 5,
    tags: ['verbal', 'psychological'],
    narratives: [
      '{actor} rewrites {target}\'s thoughts into one chant: serve, ache, obey.',
      'Cold certainty in {actor}\'s voice cracks {target}\'s last scrap of defiance.',
      '{actor} makes {target} repeat filthy vows until the words feel true.',
    ],
  },
  spank_count: {
    id: 'spank_count',
    name: 'Counted Spanks',
    description: 'Sharp impacts that sting and arouse in equal measure.',
    arousal: 16,
    selfRisk: 3,
    tags: ['impact', 'discipline'],
    narratives: [
      '{actor} lands crisp spanks, forcing {target} to count each one aloud.',
      'Heat blooms across {target}\'s skin as {actor} disciplines them with relish.',
      '{actor} pauses mid-count just to make {target} beg for the next.',
    ],
  },
  spit_and_step: {
    id: 'spit_and_step',
    name: 'Spit & Step',
    description: 'Crude, humiliating domination — spit, heel, and smirk.',
    arousal: 15,
    selfRisk: 2,
    tags: ['humiliation', 'cruel'],
    narratives: [
      '{actor} spatters {target}\'s face and presses a heel into their chest.',
      'Degradation rains down; {target} flushes hot under {actor}\'s contempt.',
      '{actor} treats {target} like furniture — and somehow that only makes it worse.',
    ],
  },
  desperate_grind: {
    id: 'desperate_grind',
    name: 'Desperate Grind',
    description: 'You grind needily, hoping to tip them over — risky for you.',
    arousal: 20,
    selfRisk: 14,
    tags: ['physical', 'needy'],
    narratives: [
      '{actor} grinds hard against {target}, chasing both their climax and ruin.',
      'Needy friction from {actor} makes {target} gasp — but {actor} is panting too.',
      '{actor} uses their whole body, reckless and hungry for {target}\'s surrender.',
    ],
  },
  bratty_defy: {
    id: 'bratty_defy',
    name: 'Bratty Defy',
    description: 'Talk back and tease — may backfire if they\'re stronger.',
    arousal: 10,
    selfRisk: 8,
    tags: ['verbal', 'brat'],
    narratives: [
      '{actor} smirks and dares {target} to do better — the challenge lands.',
      'Bratty defiance from {actor} sparks something dangerous in {target}.',
      '{actor} refuses to kneel; the tension between them crackles hotter.',
    ],
  },
  focus_breath: {
    id: 'focus_breath',
    name: 'Focus Breath',
    description: 'Steady yourself — lower your own arousal slightly.',
    arousal: 0,
    selfRisk: -10, // healing / cooling
    tags: ['recovery'],
    narratives: [
      '{actor} forces slow breaths, clawing back a shred of control.',
      '{actor} stares past the haze and banks the fire in their own body.',
      'A moment of discipline; {actor} refuses to tip over… for now.',
    ],
  },
  tongue_service: {
    id: 'tongue_service',
    name: 'Tongue Service',
    description: 'Worship with your mouth — highly effective, highly risky.',
    arousal: 26,
    selfRisk: 16,
    tags: ['oral', 'service'],
    narratives: [
      '{actor} buries their face between {target}\'s thighs and works with desperate skill.',
      'Wet, devoted sounds fill the air as {actor} services {target} relentlessly.',
      '{target} fists {actor}\'s hair while {actor} tries to make them shatter first.',
    ],
  },
  velvet_command: {
    id: 'velvet_command',
    name: 'Velvet Command',
    description: 'Silken orders that the body obeys before the mind catches up.',
    arousal: 17,
    selfRisk: 3,
    tags: ['verbal', 'control'],
    narratives: [
      '{actor}\'s soft command hits like a spell; {target}\'s body answers first.',
      '"Come closer. Beg prettier." {actor}\'s voice leaves {target} dripping compliance.',
      '{actor} narrates {target}\'s next shudder — and it arrives on cue.',
    ],
  },
  ice_and_fire: {
    id: 'ice_and_fire',
    name: 'Ice & Fire',
    description: 'Temperature play that scrambles every nerve.',
    arousal: 19,
    selfRisk: 5,
    tags: ['sensation', 'cruel'],
    narratives: [
      'Cold then heat from {actor} makes {target} jolt and moan in confusion.',
      '{actor} trails ice, then breath, then nails — {target} can\'t predict the next.',
      'Sensation overload leaves {target} twitching under {actor}\'s amused gaze.',
    ],
  },
  ownership_mark: {
    id: 'ownership_mark',
    name: 'Ownership Mark',
    description: 'Bite, bruise, claim — leave proof they belong.',
    arousal: 18,
    selfRisk: 4,
    tags: ['marking', 'possession'],
    narratives: [
      '{actor} bites and soothes, branding {target} with possession.',
      'A mark blooms on {target}\'s skin; {actor} admires their work.',
      '{actor} whispers "mine" against the bruise until {target} believes it.',
    ],
  },
};

export const PLAYER_STARTER_MOVES = [
  'teasing_words',
  'edge_stroke',
  'desperate_grind',
  'bratty_defy',
  'focus_breath',
  'tongue_service',
];

export function getMove(id: string): Move {
  const m = MOVES[id];
  if (!m) throw new Error(`Unknown move: ${id}`);
  return m;
}
