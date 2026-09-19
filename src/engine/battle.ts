import type {
  BattleCombatant,
  BattleLogEntry,
  BattleState,
  CharacterTemplate,
  PlayerState,
} from '../types/game';
import { getMove } from '../data/moves';

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function variance(base: number): number {
  const factor = 0.85 + Math.random() * 0.3;
  return Math.round(base * factor);
}

export function createCombatant(
  template: CharacterTemplate | PlayerState,
  isPlayer: boolean,
): BattleCombatant {
  if (isPlayer) {
    const p = template as PlayerState;
    return {
      id: 'player',
      name: p.name,
      title: 'Wanderer',
      arousal: 0,
      maxArousal: p.maxArousal,
      moves: [...p.moves],
      isPlayer: true,
      isBoss: false,
    };
  }
  const t = template as CharacterTemplate;
  return {
    id: t.id,
    name: t.name,
    title: t.title,
    arousal: 0,
    maxArousal: t.maxArousal,
    moves: [...t.specialties],
    isPlayer: false,
    isBoss: t.isBoss,
  };
}

export function startBattle(
  player: PlayerState,
  enemy: CharacterTemplate,
): BattleState {
  return {
    player: createCombatant(player, true),
    enemy: createCombatant(enemy, false),
    turn: 1,
    log: [
      {
        turn: 0,
        actor: 'system',
        text: enemy.encounterText,
      },
      {
        turn: 0,
        actor: 'system',
        text: `Climax duel begins. First to hit max arousal loses. ${enemy.name}'s specialty hangs in the air.`,
      },
    ],
    phase: 'choosing',
    winner: null,
    enemyTemplateId: enemy.id,
  };
}

function applyMove(
  actor: BattleCombatant,
  target: BattleCombatant,
  moveId: string,
  turn: number,
): { actor: BattleCombatant; target: BattleCombatant; entry: BattleLogEntry } {
  const move = getMove(moveId);
  const dmg = variance(move.arousal);
  const risk = variance(move.selfRisk);

  const newTarget = {
    ...target,
    arousal: clamp(target.arousal + dmg, 0, target.maxArousal),
  };
  const newActor = {
    ...actor,
    arousal: clamp(actor.arousal + risk, 0, actor.maxArousal),
  };

  const template = pick(move.narratives)
    .replace(/\{actor\}/g, actor.name)
    .replace(/\{target\}/g, target.name);

  let extra = '';
  if (dmg > 0) {
    extra += ` (+${dmg} arousal to ${target.name})`;
  }
  if (risk > 0) {
    extra += ` (+${risk} self-heat)`;
  } else if (risk < 0) {
    extra += ` (${risk} self-arousal)`;
  }

  return {
    actor: newActor,
    target: newTarget,
    entry: {
      turn,
      actor: actor.isPlayer ? 'player' : 'enemy',
      text: `${template}${extra}`,
    },
  };
}

function checkWinner(
  player: BattleCombatant,
  enemy: BattleCombatant,
): 'player' | 'enemy' | null {
  const playerDone = player.arousal >= player.maxArousal;
  const enemyDone = enemy.arousal >= enemy.maxArousal;
  if (playerDone && enemyDone) {
    // Simultaneous — slight edge to whoever had lower before; treat as player loss for femdom sting, or compare overflow
    return player.arousal >= enemy.arousal ? 'enemy' : 'player';
  }
  if (enemyDone) return 'player';
  if (playerDone) return 'enemy';
  return null;
}

/** Enemy AI: prefer high damage if player is close; heal-like if self is high; else weighted random */
export function chooseEnemyMove(battle: BattleState): string {
  const { enemy, player } = battle;
  const moves = enemy.moves.filter((id) => getMove(id));
  const playerPct = player.arousal / player.maxArousal;
  const selfPct = enemy.arousal / enemy.maxArousal;

  if (selfPct >= 0.75) {
    const cool = moves.find((id) => getMove(id).selfRisk < 0);
    if (cool && Math.random() < 0.55) return cool;
    // Prefer low self-risk
    const safe = [...moves].sort(
      (a, b) => getMove(a).selfRisk - getMove(b).selfRisk,
    );
    if (Math.random() < 0.5) return safe[0];
  }

  if (playerPct >= 0.7) {
    const finishers = [...moves].sort(
      (a, b) => getMove(b).arousal - getMove(a).arousal,
    );
    return finishers[0];
  }

  // Weighted by arousal damage
  const weights = moves.map((id) => Math.max(1, getMove(id).arousal));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < moves.length; i++) {
    r -= weights[i];
    if (r <= 0) return moves[i];
  }
  return moves[0];
}

export function resolvePlayerMove(
  battle: BattleState,
  moveId: string,
): BattleState {
  if (battle.phase !== 'choosing' || battle.winner) return battle;

  let { player, enemy } = battle;
  const log = [...battle.log];
  const turn = battle.turn;

  const playerResult = applyMove(player, enemy, moveId, turn);
  player = playerResult.actor;
  enemy = playerResult.target;
  log.push(playerResult.entry);

  let winner = checkWinner(player, enemy);
  if (winner) {
    log.push({
      turn,
      actor: 'system',
      text:
        winner === 'player'
          ? `${enemy.name} breaks — orgasm rips through them. You win the duel.`
          : `${player.name} tips over first. ${enemy.name} owns this round.`,
    });
    return {
      ...battle,
      player,
      enemy,
      log,
      phase: 'ended',
      winner,
    };
  }

  // Enemy turn
  const enemyMoveId = chooseEnemyMove({ ...battle, player, enemy, log });
  const enemyResult = applyMove(enemy, player, enemyMoveId, turn);
  enemy = enemyResult.actor;
  player = enemyResult.target;
  log.push(enemyResult.entry);

  winner = checkWinner(player, enemy);
  if (winner) {
    log.push({
      turn,
      actor: 'system',
      text:
        winner === 'player'
          ? `${enemy.name} shatters into climax. Domme defeated — for now.`
          : `You cum first under ${enemy.name}'s control. Shame logged.`,
    });
    return {
      ...battle,
      player,
      enemy,
      log,
      turn: turn + 1,
      phase: 'ended',
      winner,
    };
  }

  log.push({
    turn,
    actor: 'system',
    text: `End of turn ${turn}. You: ${player.arousal}/${player.maxArousal} · ${enemy.name}: ${enemy.arousal}/${enemy.maxArousal}`,
  });

  return {
    ...battle,
    player,
    enemy,
    log,
    turn: turn + 1,
    phase: 'choosing',
    winner: null,
  };
}
