import type { GameState, PlayerState } from '../types/game';
import { PLAYER_STARTER_MOVES } from '../data/moves';

const SAVE_KEY = 'domme-island-save-v1';

export function createNewPlayer(name = 'Wanderer'): PlayerState {
  return {
    name: name.trim() || 'Wanderer',
    orgasmsTaken: 0,
    orgasmsGiven: 0,
    bossesDefeated: [],
    currentLocationId: 'beach',
    moves: [...PLAYER_STARTER_MOVES],
    maxArousal: 100,
  };
}

export function createInitialState(name?: string): GameState {
  return {
    screen: 'title',
    player: createNewPlayer(name),
    battle: null,
    outcome: null,
    mansionDommeId: null,
    message: null,
    started: false,
  };
}

export function saveGame(state: GameState): void {
  try {
    const toSave: GameState = {
      ...state,
      // Don't persist mid-resolve oddities; battle is fine to save
      message: null,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
  } catch {
    // ignore quota / private mode
  }
}

export function loadGame(): GameState | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GameState;
    if (!parsed?.player || !parsed.started) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasSave(): boolean {
  return loadGame() !== null;
}

export function clearSave(): void {
  localStorage.removeItem(SAVE_KEY);
}
