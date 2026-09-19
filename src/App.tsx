import { useCallback, useEffect, useState } from 'react';
import type { GameState } from './types/game';
import {
  createInitialState,
  hasSave,
  loadGame,
  clearSave,
} from './engine/save';
import * as Game from './engine/game';
import { TitleScreen } from './components/TitleScreen';
import { ExploreView } from './components/ExploreView';
import { MansionView } from './components/MansionView';
import { BattleView } from './components/BattleView';
import { OutcomeView } from './components/OutcomeView';
import { StatsView } from './components/StatsView';

export default function App() {
  const [state, setState] = useState<GameState>(() => createInitialState());
  const [saveExists, setSaveExists] = useState(false);

  useEffect(() => {
    setSaveExists(hasSave());
  }, [state.started, state.screen]);

  const update = useCallback((next: GameState) => {
    setState(next);
  }, []);

  const handleNewGame = (name: string) => {
    clearSave();
    update(Game.newGame(name));
  };

  const handleContinue = () => {
    const saved = loadGame();
    if (saved) update(Game.resumeGame(saved));
  };

  return (
    <div className="app-shell">
      {state.screen === 'title' && (
        <TitleScreen
          hasSave={saveExists}
          onNewGame={handleNewGame}
          onContinue={handleContinue}
        />
      )}

      {state.screen === 'explore' && (
        <ExploreView
          state={state}
          onTravel={(id) => update(Game.travelTo(state, id))}
          onWander={() => update(Game.wander(state))}
          onStats={() => update(Game.goToStats(state))}
          onTitle={() =>
            update({ ...createInitialState(state.player.name), started: false })
          }
        />
      )}

      {state.screen === 'mansion' && (
        <MansionView
          state={state}
          onChallenge={() => update(Game.challengeBoss(state))}
          onLookAround={() => update(Game.mansionFlavor(state))}
          onLeave={() => update(Game.leaveMansion(state))}
        />
      )}

      {state.screen === 'battle' && state.battle && (
        <BattleView
          battle={state.battle}
          onMove={(moveId) => update(Game.playerBattleMove(state, moveId))}
        />
      )}

      {state.screen === 'outcome' && state.outcome && (
        <OutcomeView
          outcome={state.outcome}
          player={state.player}
          onContinue={() => update(Game.dismissOutcome(state))}
        />
      )}

      {state.screen === 'stats' && (
        <StatsView
          player={state.player}
          onBack={() => update(Game.backToExplore(state))}
        />
      )}
    </div>
  );
}
