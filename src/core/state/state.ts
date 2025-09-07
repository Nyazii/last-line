import { UnitCard, Card } from "../cards/index";

// Jogador
export type Player = "p1" | "p2";
// Turno
export type Phase = "Draw" | "Turn" | "Attack" | "Pass";

interface PlayerState {
  id: Player;                 //Define se é o jogador 1 ou 2
  moral: number;              //Moral para distribuir para as unidades
  deck: Card[];               //Importar o deck que o jogador escolheu
  hand: Card[];               //Cartas que o jogador tem na mão
  offensive: UnitCard;        //Carta na ofensiva
  backline: UnitCard[];       //Cartas na retaguarda
  discard: Card[];            //Cartas no descarte
}

export interface GameState {
  players: Record<Player,PlayerState>;  //Interface dos dois jogadores
  currentTurn: Player;                  //Identifica de quem é o turno
  phase: Phase;                         //Identifica a fasse do turno
}