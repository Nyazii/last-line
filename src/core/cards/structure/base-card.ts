// Facções disponíveis
type Faction = "dragons" | "undead" | "humans" | "celestials" | "neutral";

// Base mínima de todas as cartas
export interface BaseCard {
  id: string;           // identificador único (ex: "e01", "u05")
  instanceId: string;   // identificador em jogo (ex: "e01-1", "e01-2")
  faction: Faction;     // uma das facções disponíveis
  name: string;         // nome da carta
  image: string;        // imagem da carta
}