// Estado do jogo
export interface PlayerState {
  id: string;
  name: string;
  hand: string[];
}

export interface GameState {
  players: PlayerState[];
  turn: number;
}