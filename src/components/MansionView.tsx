import type { GameState } from '../types/game';
import { getDomme } from '../data/dommes';

interface Props {
  state: GameState;
  onChallenge: () => void;
  onLookAround: () => void;
  onLeave: () => void;
}

export function MansionView({ state, onChallenge, onLookAround, onLeave }: Props) {
  if (!state.mansionDommeId) return null;
  const domme = getDomme(state.mansionDommeId);
  const beaten = state.player.bossesDefeated.includes(domme.id);

  return (
    <div className="screen">
      <h2>
        {domme.name}, {domme.age}
      </h2>
      <p className="muted">{domme.title}</p>

      <div className="card prose">
        <p>{domme.description}</p>
        <p style={{ color: 'var(--accent-soft)' }}>
          <em>{domme.personality}</em>
        </p>
        {state.message && (
          <p style={{ marginTop: 12, color: 'var(--gold)' }}>{state.message}</p>
        )}
        {beaten && (
          <p style={{ marginTop: 12, color: 'var(--success)' }}>
            You have already claimed an orgasm from {domme.name}. Rematch anytime.
          </p>
        )}
      </div>

      <div className="btn-row">
        <button type="button" className="btn btn-danger" onClick={onChallenge}>
          Challenge to climax duel
          <span className="btn-sub">First to orgasm loses</span>
        </button>
        <button type="button" className="btn" onClick={onLookAround}>
          Look around the mansion
        </button>
        <button type="button" className="btn btn-ghost" onClick={onLeave}>
          Leave
        </button>
      </div>
    </div>
  );
}
