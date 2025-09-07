import { CelestialsCards } from "./celestials";
import { DragonCards } from "./dragons";
import { HumansCards } from "./humans";
import { NeutralCards } from "./neutral";
import { UndeadCards } from "./undead";

// Estrutura das cartas
export * from "./structure";

// Individuais
export * from "./celestials";
export * from "./dragons";
export * from "./humans";
export * from "./undead";
export * from "./neutral";

// Arrays por facção
export { CelestialsCards };
export { DragonCards };
export { HumansCards };
export { UndeadCards };
export { NeutralCards };

// Array global
export const AllCards = [
  ...CelestialsCards,
  ...DragonCards,
  ...HumansCards,
  ...UndeadCards,
  ...NeutralCards,
];