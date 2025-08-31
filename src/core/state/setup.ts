import { GameState } from "./state";

export function createInitialState(): GameState {
  return {
    players: [
      { id: "p1", name: "Player 1", hand: [] },
      { id: "p2", name: "Player 2", hand: [] },
    ],
    turn: 0,
  };
}