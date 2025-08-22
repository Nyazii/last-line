import { BaseCard } from "./base-card";
import { GameState } from "../state/state";

// Tipo que define o efeito do ataque (recebe o estado do jogo e a carta que atacou)
export type AttackEffect = (state: GameState, card: UnitCard) => void;

// Estrutura de um ataque
export interface Attack {
  name: string;                // nome do ataque
  cost: number;                // custo mínimo de moral
  damage: number;              // dano causado
  effectDescription?: string;  // descrição do efeito, se houver
  effect?: AttackEffect;       // função do efeito
}

// Carta de unidade
export interface UnitCard extends BaseCard {
  type: "unit";
  hitpoints: number;   // pontos de vida
  moral: number;       // moral atual da unidade
  attacks: Attack[];   // lista de ataques disponíveis (1 ou mais)
}