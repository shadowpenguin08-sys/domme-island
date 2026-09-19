export type Screen =
  | 'title'
  | 'explore'
  | 'mansion'
  | 'battle'
  | 'outcome'
  | 'stats';

export interface Move {
  id: string;
  name: string;
  description: string;
  /** Base arousal damage dealt to opponent */
  arousal: number;
  /** Self-arousal risk when using this move */
  selfRisk: number;
  /** Flavor tags for narrative */
  tags: string[];
  /** Narrative templates; {actor} {target} substituted */
  narratives: string[];
}

export interface CharacterTemplate {
  id: string;
  name: string;
  age: number; // always 18+
  title: string;
  personality: string;
  description: string;
  specialties: string[]; // move ids
  maxArousal: number;
  isBoss: boolean;
  mansionId?: string;
  defeatText: string;
  victoryText: string;
  encounterText: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  /** Chance 0-1 of random minion encounter when wandering here */
  encounterChance: number;
  /** Minion ids that can appear here */
  minionPool: string[];
  /** Optional linked Domme mansion */
  mansionOf?: string;
  emoji: string;
}

export interface PlayerState {
  name: string;
  orgasmsTaken: number; // times player climaxed (losses)
  orgasmsGiven: number; // times made opponent climax (wins)
  bossesDefeated: string[];
  currentLocationId: string;
  /** Player move loadout */
  moves: string[];
  maxArousal: number;
}

export interface BattleCombatant {
  id: string;
  name: string;
  title: string;
  arousal: number;
  maxArousal: number;
  moves: string[];
  isPlayer: boolean;
  isBoss: boolean;
}

export interface BattleLogEntry {
  turn: number;
  text: string;
  actor: 'player' | 'enemy' | 'system';
}

export interface BattleState {
  player: BattleCombatant;
  enemy: BattleCombatant;
  turn: number;
  log: BattleLogEntry[];
  phase: 'choosing' | 'resolving' | 'ended';
  winner: 'player' | 'enemy' | null;
  enemyTemplateId: string;
}

export interface OutcomeState {
  won: boolean;
  enemyName: string;
  enemyTitle: string;
  isBoss: boolean;
  narrative: string;
  enemyId: string;
}

export interface GameState {
  screen: Screen;
  player: PlayerState;
  battle: BattleState | null;
  outcome: OutcomeState | null;
  mansionDommeId: string | null;
  message: string | null;
  started: boolean;
}
