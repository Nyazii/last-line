import { BaseCard } from "./base-card";
import { GameState } from "../../state/state";

// Tipo que define o efeito do evento (recebe o estado do jogo e a carta que foi usada)
type EventEffect = (state: GameState, card: EventCard) => void;

// Carta de evento
export interface EventCard extends BaseCard {
    type: "event";
    cost: number;           // custo de moral para usar a carta
    description: string;    // descrição do efeito da carta
    effect: EventEffect;    // função do efeito
}