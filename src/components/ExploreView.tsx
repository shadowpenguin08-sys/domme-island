import type { GameState } from '../types/game';
import { LOCATIONS } from '../data/locations';
import { getLocation } from '../data/locations';

interface Props {
  state: GameState;
  onTravel: (id: string) => void;
  onWander: () => void;
  onStats: () => void;
  onTitle: () => void;
}

export function ExploreView({ state, onTravel, onWander, onStats, onTitle }: Props) {
  const loc = getLocation(state.player.currentLocationId);
  const exploreZones = LOCATIONS.filter((l) => !l.mansionOf);
  const mansions = LOCATIONS.filter((l) => l.mansionOf);

  return (
    <div className="screen">
      <div className="header-bar">
        <h2>Explore</h2>
        <div className="stat-pills">
          <span className="pill">
            Wins <strong>{state.player.orgasmsGiven}</strong>
          </span>
          <span className="pill">
            Losses <strong>{state.player.orgasmsTaken}</strong>
          </span>
        </div>
      </div>

      <div className="card">
        <div className="prose">
          <strong>
            {loc.emoji} {loc.name}
          </strong>
          <p className="muted" style={{ margin: '6px 0 0' }}>
            {loc.description}
          </p>
        </div>
        {state.message && (
          <p className="prose" style={{ marginTop: 12, color: 'var(--gold)' }}>
            {state.message}
          </p>
        )}
      </div>

      {!loc.mansionOf && (
        <button type="button" className="btn btn-primary" onClick={onWander}>
          Wander this zone
          <span className="btn-sub">Risk a random Domme encounter</span>
        </button>
      )}

      <h3 className="muted" style={{ fontSize: '0.85rem', marginTop: 4 }}>
        Zones
      </h3>
      <div className="location-grid">
        {exploreZones.map((l) => (
          <button
            key={l.id}
            type="button"
            className="btn loc-btn"
            onClick={() => onTravel(l.id)}
            disabled={l.id === loc.id}
          >
            <span className="loc-emoji">{l.emoji}</span>
            <span className="loc-body">
              <span className="btn-title">{l.name}</span>
              <span className="btn-sub">
                {l.id === loc.id ? 'You are here' : 'Travel'}
              </span>
            </span>
          </button>
        ))}
      </div>

      <h3 className="muted" style={{ fontSize: '0.85rem', marginTop: 4 }}>
        Domme Suites
      </h3>
      <div className="location-grid">
        {mansions.map((l) => {
          const defeated = state.player.bossesDefeated.includes(l.mansionOf!);
          return (
            <button
              key={l.id}
              type="button"
              className="btn loc-btn"
              onClick={() => onTravel(l.id)}
            >
              <span className="loc-emoji">{l.emoji}</span>
              <span className="loc-body">
                <span className="btn-title">{l.name}</span>
                <span className="btn-sub">
                  {defeated ? 'Boss orgasm claimed ✓' : 'Challenge the Domme'}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="btn-row" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-ghost" onClick={onStats}>
          Stats & loadout
        </button>
        <button type="button" className="btn btn-ghost" onClick={onTitle}>
          Title screen
        </button>
      </div>
    </div>
  );
}
