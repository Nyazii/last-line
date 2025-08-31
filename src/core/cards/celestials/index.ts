import { AnjoGuardiao } from "./anjo-guardiao";
import { ArcanjodaJustica } from "./arcanjo-da-justica";
import { BencaoDivina } from "./bencao-divina";
import { CampoSagrado } from "./campo-sagrado";
import { CantoSagrado } from "./canto-sagrado";
import { CentelhaDivina } from "./centelha-divina";
import { IntervencaoDivina } from "./intervencao-divina";
import { PegasusSagrado } from "./pegasus-sagrado";

//Cartas individuais
export * from "./centelha-divina";
export * from "./anjo-guardiao";
export * from "./pegasus-sagrado";
export * from "./arcanjo-da-justica";
export * from "./bencao-divina";
export * from "./canto-sagrado";
export * from "./campo-sagrado";
export * from "./intervencao-divina";

// Array
export const CelestialsCards = [
  CentelhaDivina,
  AnjoGuardiao,
  PegasusSagrado,
  ArcanjodaJustica,
  BencaoDivina,
  CantoSagrado,
  CampoSagrado,
  IntervencaoDivina
];