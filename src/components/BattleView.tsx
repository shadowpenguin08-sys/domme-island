import { useEffect, useRef } from 'react';
import type { BattleState } from '../types/game';
import { getMove } from '../data/moves';

interface Props {
  battle: BattleState;
  onMove: (moveId: string) => void;
}

function Meter({
  label,
  value,
  max,
  kind,
}: {
  label: string;
  value: number;
  max: number;
  kind: 'player' | 'enemy';
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="meter-block">
      <div className="meter-label">
        <span>{label}</span>
        <span>
          {value}/{max} ({pct}%)
        </span>
      </div>
      <div className="meter-track">
        <div className={`meter-fill ${kind}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function BattleView({ battle, onMove }: Props) {
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [battle.log.length]);

  const choosing = battle.phase === 'choosing';

  return (
    <div className="screen">
      <h2>Climax Duel</h2>
      <p className="muted">
        Turn {battle.turn} · vs {battle.enemy.name} ({battle.enemy.title})
        {battle.enemy.isBoss ? ' · BOSS' : ''}
      </p>

      <div className="card">
        <Meter
          label={`You — arousal`}
          value={battle.player.arousal}
          max={battle.player.maxArousal}
          kind="player"
        />
        <Meter
          label={`${battle.enemy.name} — arousal`}
          value={battle.enemy.arousal}
          max={battle.enemy.maxArousal}
          kind="enemy"
        />
        <p className="muted" style={{ fontSize: '0.8rem', margin: 0 }}>
          Fill their meter to make them cum first. If yours fills, you lose.
        </p>
      </div>

      <div className="card battle-log" ref={logRef}>
        {battle.log.map((e, i) => (
          <div key={i} className={`log-entry ${e.actor}`}>
            {e.text}
          </div>
        ))}
      </div>

      {choosing && (
        <>
          <h3 className="muted" style={{ fontSize: '0.85rem' }}>
            Your move
          </h3>
          <div className="move-grid">
            {battle.player.moves.map((id) => {
              const m = getMove(id);
              return (
                <button
                  key={id}
                  type="button"
                  className="btn"
                  onClick={() => onMove(id)}
                >
                  <span className="btn-title">{m.name}</span>
                  <span className="btn-sub">
                    +{m.arousal}
                    {m.selfRisk > 0
                      ? ` · risk ${m.selfRisk}`
                      : m.selfRisk < 0
                        ? ` · cool ${Math.abs(m.selfRisk)}`
                        : ''}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
