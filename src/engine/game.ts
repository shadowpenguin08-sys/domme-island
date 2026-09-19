import type { GameState, OutcomeState } from '../types/game';
import { getLocation } from '../data/locations';
import { getDomme, MANSION_FLAVOR } from '../data/dommes';
import { pickMinionFromPool, getMinion } from '../data/minions';
import { startBattle, resolvePlayerMove } from './battle';
import { createInitialState, saveGame } from './save';

function persist(state: GameState): GameState {
  saveGame(state);
  return state;
}

export function newGame(name: string): GameState {
  const state = createInitialState(name);
  state.screen = 'explore';
  state.started = true;
  state.message =
    'You wash ashore on Domme Island. Every path leads to someone who wants to make you cum first. Survive. Collect their orgasms.';
  return persist(state);
}

export function resumeGame(state: GameState): GameState {
  // If mid-battle was saved, stay there; otherwise explore
  if (state.battle && state.battle.phase !== 'ended') {
    return { ...state, screen: 'battle', message: null };
  }
  return {
    ...state,
    screen: 'explore',
    battle: null,
    outcome: null,
    message: 'Welcome back to Domme Island.',
  };
}

export function travelTo(state: GameState, locationId: string): GameState {
  const loc = getLocation(locationId);
  if (loc.mansionOf) {
    return persist({
      ...state,
      player: { ...state.player, currentLocationId: locationId },
      screen: 'mansion',
      mansionDommeId: loc.mansionOf,
      message: null,
    });
  }
  return persist({
    ...state,
    player: { ...state.player, currentLocationId: locationId },
    screen: 'explore',
    mansionDommeId: null,
    message: `You arrive at ${loc.name}. ${loc.description}`,
  });
}

export function wander(state: GameState): GameState {
  const loc = getLocation(state.player.currentLocationId);
  if (loc.mansionOf) {
    return state;
  }

  if (loc.minionPool.length === 0 || Math.random() > loc.encounterChance) {
    const flavor = [
      'You wander without incident — for now. The island hums with distant moans.',
      'Footprints in the dirt. Fresh. You keep moving.',
      'A Domme\'s laughter drifts on the wind, then fades. Lucky.',
      'You find a discarded collar. Not yours. Yet.',
    ];
    return persist({
      ...state,
      message: flavor[Math.floor(Math.random() * flavor.length)],
    });
  }

  const minion = pickMinionFromPool(loc.minionPool);
  const battle = startBattle(state.player, minion);
  return persist({
    ...state,
    screen: 'battle',
    battle,
    message: null,
  });
}

export function challengeBoss(state: GameState): GameState {
  if (!state.mansionDommeId) return state;
  const domme = getDomme(state.mansionDommeId);
  const battle = startBattle(state.player, domme);
  return persist({
    ...state,
    screen: 'battle',
    battle,
    message: null,
  });
}

export function mansionFlavor(state: GameState): GameState {
  if (!state.mansionDommeId) return state;
  const lines = MANSION_FLAVOR[state.mansionDommeId] ?? ['The mansion watches.'];
  return {
    ...state,
    message: lines[Math.floor(Math.random() * lines.length)],
  };
}

export function leaveMansion(state: GameState): GameState {
  return persist({
    ...state,
    screen: 'explore',
    mansionDommeId: null,
    player: { ...state.player, currentLocationId: 'beach' },
    message: 'You leave the mansion grounds. The island opens again.',
  });
}

export function playerBattleMove(state: GameState, moveId: string): GameState {
  if (!state.battle || state.battle.phase === 'ended') return state;
  const battle = resolvePlayerMove(state.battle, moveId);

  if (battle.phase === 'ended' && battle.winner) {
    const enemyId = battle.enemyTemplateId;
    const isBoss = battle.enemy.isBoss;
    let narrative: string;
    try {
      const tmpl = isBoss ? getDomme(enemyId) : getMinion(enemyId);
      narrative =
        battle.winner === 'player' ? tmpl.defeatText : tmpl.victoryText;
    } catch {
      narrative =
        battle.winner === 'player'
          ? 'They climax first. You claim the orgasm.'
          : 'You climax first. Shame and afterglow.';
    }

    const outcome: OutcomeState = {
      won: battle.winner === 'player',
      enemyName: battle.enemy.name,
      enemyTitle: battle.enemy.title,
      isBoss,
      narrative,
      enemyId,
    };

    let player = { ...state.player };
    if (outcome.won) {
      player.orgasmsGiven += 1;
      if (isBoss && !player.bossesDefeated.includes(enemyId)) {
        player.bossesDefeated = [...player.bossesDefeated, enemyId];
      }
    } else {
      player.orgasmsTaken += 1;
    }

    return persist({
      ...state,
      player,
      battle,
      outcome,
      screen: 'outcome',
    });
  }

  return persist({ ...state, battle });
}

export function dismissOutcome(state: GameState): GameState {
  return persist({
    ...state,
    screen: 'explore',
    battle: null,
    outcome: null,
    mansionDommeId: null,
    message:
      state.outcome?.won
        ? 'Afterglow and swagger. Back to the paths.'
        : 'Legs shaky. Pride bruised. The island isn\'t done with you.',
  });
}

export function goToStats(state: GameState): GameState {
  return { ...state, screen: 'stats' };
}

export function backToExplore(state: GameState): GameState {
  return persist({ ...state, screen: 'explore' });
}
