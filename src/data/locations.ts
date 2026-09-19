import type { Location } from '../types/game';

export const LOCATIONS: Location[] = [
  {
    id: 'beach',
    name: 'Obsidian Beach',
    emoji: '🏖️',
    description:
      'Black sand and warm tide. Minion Dommes patrol the shoreline looking for soft tourists to ruin.',
    encounterChance: 0.55,
    minionPool: ['patrol_minion', 'beach_tease', 'collar_runner'],
  },
  {
    id: 'jungle',
    name: 'Velvet Jungle',
    emoji: '🌴',
    description:
      'Dense canopy, ropes hanging like invitations. Something always watches from the vines.',
    encounterChance: 0.6,
    minionPool: ['vine_binder', 'patrol_minion', 'whisper_scout'],
  },
  {
    id: 'ruins',
    name: 'Temple Ruins',
    emoji: '🏛️',
    description:
      'Crumbling stone altars still sticky with old rituals. Humiliation echoes here.',
    encounterChance: 0.5,
    minionPool: ['altar_acolyte', 'whisper_scout', 'collar_runner'],
  },
  {
    id: 'market',
    name: 'Night Market',
    emoji: '🏮',
    description:
      'Lanterns, leather stalls, and public displays. Bargains cost dignity.',
    encounterChance: 0.45,
    minionPool: ['market_vendor', 'beach_tease', 'patrol_minion'],
  },
  {
    id: 'cliffs',
    name: 'Moan Cliffs',
    emoji: '🌊',
    description:
      'Wind-scoured heights overlooking the sea. Dommes bring conquests here to finish them.',
    encounterChance: 0.4,
    minionPool: ['vine_binder', 'altar_acolyte', 'whisper_scout'],
  },
  {
    id: 'mansion_scarlet',
    name: 'Scarlet\'s Crimson Manor',
    emoji: '🌹',
    description:
      'A blood-red mansion of mirrors and silk. Lady Scarlet collects broken wills like jewelry.',
    encounterChance: 0,
    minionPool: [],
    mansionOf: 'lady_scarlet',
  },
  {
    id: 'mansion_ivory',
    name: 'Ivory\'s Pale Estate',
    emoji: '🤍',
    description:
      'White marble, cold perfume, and perfect silence. Mistress Ivory ruins with elegance.',
    encounterChance: 0,
    minionPool: [],
    mansionOf: 'mistress_ivory',
  },
  {
    id: 'mansion_hex',
    name: 'Hex\'s Thorn Spire',
    emoji: '🦇',
    description:
      'A crooked tower wrapped in thorns and neon runes. Domme Hex treats minds like toys.',
    encounterChance: 0,
    minionPool: [],
    mansionOf: 'domme_hex',
  },
];

export function getLocation(id: string): Location {
  const loc = LOCATIONS.find((l) => l.id === id);
  if (!loc) throw new Error(`Unknown location: ${id}`);
  return loc;
}
