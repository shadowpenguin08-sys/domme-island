import type { PlayerState } from '../types/game';
import { getMove } from '../data/moves';
import { DOMME_LIST } from '../data/dommes';

interface Props {
  player: PlayerState;
  onBack: () => void;
}

export function StatsView({ player, onBack }: Props) {
  return (
    <div className="screen">
      <h2>{player.name}</h2>
      <p className="muted">Wanderer · max arousal {player.maxArousal}</p>

      <div className="stat-pills">
        <span className="pill">
          Wins <strong>{player.orgasmsGiven}</strong>
        </span>
        <span className="pill">
          Losses <strong>{player.orgasmsTaken}</strong>
        </span>
      </div>

      <div className="card">
        <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>Boss progress</h3>
        {DOMME_LIST.map((d) => {
          const done = player.bossesDefeated.includes(d.id);
          return (
            <p key={d.id} className="muted" style={{ margin: '6px 0' }}>
              {done ? '✓' : '○'} {d.name} ({d.age}) — {d.title}
            </p>
          );
        })}
      </div>

      <div className="card">
        <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>Your moves</h3>
        {player.moves.map((id) => {
          const m = getMove(id);
          return (
            <div key={id} style={{ marginBottom: 10 }}>
              <strong>{m.name}</strong>
              <div className="muted" style={{ fontSize: '0.85rem' }}>
                {m.description} (dmg {m.arousal}
                {m.selfRisk !== 0 ? `, self ${m.selfRisk}` : ''})
              </div>
            </div>
          );
        })}
      </div>

      <button type="button" className="btn btn-primary" onClick={onBack}>
        Back
      </button>
    </div>
  );
}
