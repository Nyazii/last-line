// Estado do jogo
export interface PlayerState {
  id: string;
  name: string;
  morale: number;
  hand: string[]; // ids das cartas
}

export interface GameState {
  players: PlayerState[];
  turn: number; // índice do jogador atual
}