import { BaseCard } from "./base-card";

// Tipo que define o efeito ativo do comando
type CommandEffect = () => void;

// Carta de comando
export interface CommandCard extends BaseCard {
    type: "command";        // tipo definido como comando
    description: string;    // descrição do efeito da carta
    effect: CommandEffect;  // função do efeito
}