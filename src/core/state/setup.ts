import { GameState } from "./state";

// Cria um estado inicial de jogo
export function createInitialState(): GameState {
  return {
    players: [
      { id: "p1", name: "Player 1", morale: 10, hand: [] },
      { id: "p2", name: "Player 2", morale: 10, hand: [] },
    ],
    turn: 0,
  };
}