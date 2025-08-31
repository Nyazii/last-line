import { BaseCard } from "./base-card";

// Tipo que define o efeito atico do evento
type EventEffect = () => void;

// Carta de evento
export interface EventCard extends BaseCard {
    type: "event";          // tipo definido como evento
    cost: number;           // custo de moral para usar a carta
    description: string;    // descrição do efeito da carta
    effect: EventEffect;    // função do efeito
}