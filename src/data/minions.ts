import type { CharacterTemplate } from '../types/game';

/** All minions are explicitly 21+ adults. */
export const MINIONS: Record<string, CharacterTemplate> = {
  patrol_minion: {
    id: 'patrol_minion',
    name: 'Patrol Domme Rhea',
    age: 24,
    title: 'Island Patrol',
    personality: 'Cocky, hands-on, loves public edge sessions.',
    description: 'Rhea (24) in harness and boots, assigned to "correct" wanderers.',
    specialties: ['edge_stroke', 'spank_count', 'teasing_words', 'boot_worship'],
    maxArousal: 70,
    isBoss: false,
    encounterText:
      'A patrol Domme blocks your path, smirking. "Wandering without a handler? Cute. Let\'s fix that."',
    defeatText:
      'Rhea cums with a startled curse, bracing on her baton. "Don\'t — don\'t report this." Win logged.',
    victoryText:
      'Rhea edges you until you spill in the dirt, then tags your cheek with a lipstick X. "Patrol complete."',
  },
  beach_tease: {
    id: 'beach_tease',
    name: 'Shore Domme Lana',
    age: 23,
    title: 'Beach Tease',
    personality: 'Playful, mean, sun-drunk humiliation.',
    description: 'Lana (23) collects guests on the black sand for light, cruel fun.',
    specialties: ['teasing_words', 'spit_and_step', 'desperate_grind', 'boot_worship'],
    maxArousal: 65,
    isBoss: false,
    encounterText:
      'Lana tosses her hair and plants a foot on your chest in the surf. "Say please like you mean it."',
    defeatText:
      'Lana shudders through climax in the tide, laughing weakly. "Okay, damn — you got me."',
    victoryText:
      'She rides your face until you climax helplessly into the sand. "Gross. Perfect."',
  },
  collar_runner: {
    id: 'collar_runner',
    name: 'Collar Runner Nyx',
    age: 25,
    title: 'Collar Courier',
    personality: 'Efficient, degrading, treats people like packages.',
    description: 'Nyx (25) delivers collars — and tests them on whoever looks free.',
    specialties: ['ownership_mark', 'velvet_command', 'edge_stroke', 'spank_count'],
    maxArousal: 72,
    isBoss: false,
    encounterText:
      'Nyx snaps a spare collar open. "Delivery practice. You\'re the package."',
    defeatText:
      'Nyx drops the collar as she cums, flushed furious. "Package… escaped. Ugh."',
    victoryText:
      'The click of a temporary collar coincides with your forced orgasm. "Fragile. Marked."',
  },
  vine_binder: {
    id: 'vine_binder',
    name: 'Binder Domme Mara',
    age: 27,
    title: 'Garden Rope Domme',
    personality: 'Slow, methodical shibari and denial among the resort gardens.',
    description:
      'Mara (27) keeps rope kits stashed along the garden paths. She ties guests into elegant, humiliating displays between the hedges.',
    specialties: ['ruined_touch', 'edge_stroke', 'ice_and_fire', 'mind_break'],
    maxArousal: 75,
    isBoss: false,
    encounterText:
      'Mara steps out from the hedges, coils of rope over one shoulder. "Hold still. Struggle makes prettier knots."',
    defeatText:
      'Mara cums against her own ropes, biting off a moan. "Untie me before someone sees."',
    victoryText:
      'Suspended and denied then flooded, you climax on her schedule. "Good sculpture."',
  },
  whisper_scout: {
    id: 'whisper_scout',
    name: 'Scout Domme Vesper',
    age: 22,
    title: 'Whisper Scout',
    personality: 'Quiet, psychological, loves verbal undoing.',
    description: 'Vesper (22) slips between lounge and path and ruins focus with soft cruelty.',
    specialties: ['mind_break', 'teasing_words', 'velvet_command', 'focus_breath'],
    maxArousal: 68,
    isBoss: false,
    encounterText:
      'A whisper at your ear: Vesper. "I already know how you sound when you break."',
    defeatText:
      'Vesper\'s whisper breaks into a whimper as she climaxes. "…That wasn\'t in the script."',
    victoryText:
      'She talks you into orgasm without much touch at all. "Told you. Soft targets."',
  },
  altar_acolyte: {
    id: 'altar_acolyte',
    name: 'Ceremony Domme Sable',
    age: 28,
    title: 'Private Dungeon Host',
    personality: 'Ritualistic, solemn, deeply filthy under the protocol.',
    description:
      'Sable (28) hosts formal scenes in the cliffside ceremony room — padded bench, candles, and a guest book of wrecked egos.',
    specialties: ['strap_thrust', 'ownership_mark', 'spank_count', 'mind_break'],
    maxArousal: 78,
    isBoss: false,
    encounterText:
      'Sable gestures to the padded bench. "Offer yourself. House rules: you moan on cue."',
    defeatText:
      'Protocol shatters; Sable cums across the ceremony bench. "Off-script… win."',
    victoryText:
      'She fucks a climax out of you as "house tithe." "The room accepts. Barely."',
  },
  market_vendor: {
    id: 'market_vendor',
    name: 'Vendor Domme Kira',
    age: 30,
    title: 'Night Market Vendor',
    personality: 'Transactional sadism — everything has a price in orgasms.',
    description: 'Kira (30) sells toys and "demonstrations." You look like stock.',
    specialties: ['spit_and_step', 'teasing_words', 'ruined_touch', 'boot_worship'],
    maxArousal: 70,
    isBoss: false,
    encounterText:
      'Kira beckons from her stall. "Free demo. You\'re the product. Hands where I can see them."',
    defeatText:
      'Kira spills over mid-demo, knocking over a tray of plugs. "Store credit… for you. Fuck."',
    victoryText:
      'She ruins your orgasm as a sales pitch to onlookers. "See? Sensitive stock."',
  },
};

export function getMinion(id: string): CharacterTemplate {
  const m = MINIONS[id];
  if (!m) throw new Error(`Unknown minion: ${id}`);
  return m;
}

export function pickMinionFromPool(pool: string[]): CharacterTemplate {
  const id = pool[Math.floor(Math.random() * pool.length)];
  return getMinion(id);
}
