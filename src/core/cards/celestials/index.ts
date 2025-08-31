import { AnjoGuardiao } from "./anjo-guardiao";
import { ArcanjodaJustica } from "./arcanjo-da-justica";
import { CentelhaDivina } from "./centelha-divina";
import { PegasusSagrado } from "./pegasus-sagrado";

//Cartas individuais
export * from "./centelha-divina";
export * from "./anjo-guardiao";
export * from "./pegasus-sagrado";
export * from "./arcanjo-da-justica";

// Array
export const CelestialsCards = [
  CentelhaDivina,
  AnjoGuardiao,
  PegasusSagrado,
  ArcanjodaJustica
];