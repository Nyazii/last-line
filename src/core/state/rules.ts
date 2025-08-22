import { GameState } from "./state";

// Passar turno
export function nextTurn(state: GameState): GameState {
  return {
    ...state,
    turn: (state.turn + 1) % state.players.length,
  };
}