import { ArquimagoSupremo } from "./arquimago-supremo";
import { CavaleirodeElite } from "./cavaleiro-de-elite";
import { MagodeBatalha } from "./mago-de-batalha";
import { Recruta } from "./recruta";

//Cartas individuais
export * from "./recruta";
export * from "./cavaleiro-de-elite";
export * from "./mago-de-batalha";
export * from "./arquimago-supremo";

// Array
export const HumansCards = [
  Recruta,
  CavaleirodeElite,
  MagodeBatalha,
  ArquimagoSupremo
];