import { BaseCard } from "./base-card";

// Tipo que define o efeito passivo do Efeito de Batalha
type BattleEffect = () => void;

// Carta de Efeito de Batalha
export interface BattleEffectCard extends BaseCard {
    type: "battleeffect";   // tipo definido como efeito de batalha
    cost: number;           // custo de moral para usar a carta
    description: string;    // descrição do efeito da carta
    effect: BattleEffect;   // função do efeito
}