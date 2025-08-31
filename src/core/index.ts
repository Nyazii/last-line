import { CelestialsCards } from "./cards/celestials"
import { DragonCards } from "./cards/dragons"
import { HumansCards } from "./cards/humans"
import { UndeadCards } from "./cards/undead"

// Individuais
export * from "./cards/celestials"
export * from "./cards/dragons"
export * from "./cards/humans"
export * from "./cards/undead"

// Arrays por facção
export { CelestialsCards };
export { DragonCards };
export { HumansCards };
export { UndeadCards };

// Array global
export const AllCards = [
  ...CelestialsCards,
  ...DragonCards,
  ...HumansCards,
  ...UndeadCards,
];