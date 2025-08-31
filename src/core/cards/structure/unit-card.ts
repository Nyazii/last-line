import { BaseCard } from "./base-card";

type stage = 0 | 1 | 2 ;

// Tipo que define o efeito ativo do ataque
type AttackEffect = () => void;

// Estrutura de um ataque
interface Attack {
  name: string;                // nome do ataque
  cost: number;                // custo mínimo de moral
  damage: number;              // dano causado
  effectDescription?: string;  // descrição do efeito, se houver
  effect?: AttackEffect;       // função do efeito
}

// Carta de unidade
export interface UnitCard extends BaseCard {
  type: "unit";        // tipo definido como unidade
  stage: stage;        // estágio da unidade
  hitpoints: number;   // pontos de vida
  moral: number;       // moral atual da unidade
  attacks: Attack[];   // lista de ataques disponíveis (1 ou mais)
}