import type { OutcomeState, PlayerState } from '../types/game';

interface Props {
  outcome: OutcomeState;
  player: PlayerState;
  onContinue: () => void;
}

export function OutcomeView({ outcome, player, onContinue }: Props) {
  return (
    <div className="screen">
      <div className={`outcome-banner ${outcome.won ? 'win' : 'lose'}`}>
        {outcome.won ? 'You made them cum' : 'You came first'}
      </div>

      <div className="card prose">
        <p>
          <strong>
            {outcome.enemyName}
          </strong>{' '}
          <span className="muted">({outcome.enemyTitle})</span>
          {outcome.isBoss ? ' · Boss' : ''}
        </p>
        <p>{outcome.narrative}</p>
      </div>

      <div className="stat-pills">
        <span className="pill">
          Orgasms given <strong>{player.orgasmsGiven}</strong>
        </span>
        <span className="pill">
          Orgasms taken <strong>{player.orgasmsTaken}</strong>
        </span>
        <span className="pill">
          Bosses <strong>
            {player.bossesDefeated.length}/3
          </strong>
        </span>
      </div>

      {player.bossesDefeated.length >= 3 && outcome.won && outcome.isBoss && (
        <div className="card prose" style={{ borderColor: 'var(--gold)' }}>
          <p style={{ color: 'var(--gold)', margin: 0 }}>
            You have claimed orgasms from every mansion Domme. The island still
            prowls with minions — rematch whenever you crave it.
          </p>
        </div>
      )}

      <button type="button" className="btn btn-primary" onClick={onContinue}>
        Back to the island
      </button>
    </div>
  );
}
