import { CelestialsCards } from "./cards/celestials";
import { DragonCards } from "./cards/dragons";
import { HumansCards } from "./cards/humans";
import { NeutralCards } from "./cards/neutral";
import { UndeadCards } from "./cards/undead";

// Individuais
export * from "./cards/celestials";
export * from "./cards/dragons";
export * from "./cards/humans";
export * from "./cards/undead";
export * from "./cards/neutral";

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