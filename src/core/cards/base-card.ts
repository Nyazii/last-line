// Facções disponíveis
export type Faction = "Dragons" | "Undead" | "Humans" | "Celestials" | "Neutral";

// Base mínima de todas as cartas
export interface BaseCard {
  id: string;           // identificador único (ex: "e01", "u05")
  faction: Faction;     // uma das facções disponíveis
  name: string;         // nome da carta
  image: string;        // imagem da carta
}