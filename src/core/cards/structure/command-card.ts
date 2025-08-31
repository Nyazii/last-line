import { BaseCard } from "./base-card";
import { GameState } from "../../state/state";

// Tipo que define o efeito do comando (recebe o estado do jogo e a carta que foi usada)
type CommandEffect = (state: GameState, card: CommandCard) => void;

// Carta de comando
export interface CommandCard extends BaseCard {
    type: "command";
    description: string;    // descrição do efeito da carta
    effect: CommandEffect;  // função do efeito
}