import { useState } from 'react';

interface Props {
  hasSave: boolean;
  onNewGame: (name: string) => void;
  onContinue: () => void;
}

export function TitleScreen({ hasSave, onNewGame, onContinue }: Props) {
  const [name, setName] = useState('Wanderer');

  return (
    <div className="screen">
      <div className="title-hero">
        <h1>Domme Island</h1>
        <p className="tagline">An adult femdom text RPG</p>
        <p className="age-gate">18+ / 21+ characters only · Explicit sexual content</p>
      </div>

      <div className="card prose">
        <p>
          Wash ashore on an island ruled by Dommes. Wander black-sand beaches,
          velvet jungles, and neon-thorn towers. Minions will stop you. Bosses
          wait in mansions shaped like their cruelty.
        </p>
        <p>
          Fights are climax duels: push their arousal to the brink before they
          break yours. First to orgasm loses the bout. Collect Domme orgasms.
          Survive the shame when you fail.
        </p>
      </div>

      <label className="muted" htmlFor="player-name">
        Your name
      </label>
      <input
        id="player-name"
        className="input-name"
        value={name}
        maxLength={24}
        onChange={(e) => setName(e.target.value)}
        placeholder="Wanderer"
        autoComplete="off"
      />

      <div className="btn-row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onNewGame(name)}
        >
          New Game
        </button>
        {hasSave && (
          <button type="button" className="btn btn-ghost" onClick={onContinue}>
            Continue
          </button>
        )}
      </div>

      <p className="footer-hint">Mobile-first · Saves in this browser · No account</p>
    </div>
  );
}
