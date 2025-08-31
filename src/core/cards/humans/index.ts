import { CampoProfano } from "../undead";
import { ArquimagoSupremo } from "./arquimago-supremo";
import { AtaqueDirecionado } from "./ataque-direcionado";
import { CavaleirodeElite } from "./cavaleiro-de-elite";
import { MagodeBatalha } from "./mago-de-batalha";
import { Recruta } from "./recruta";
import { Reforcos } from "./reforcos";
import { TaticadeGuerra } from "./tatica-de-guerra";

//Cartas individuais
export * from "./recruta";
export * from "./cavaleiro-de-elite";
export * from "./mago-de-batalha";
export * from "./arquimago-supremo";
export * from "./tatica-de-guerra";
export * from "./reforcos";
export * from "./campo-de-treinamento";
export * from "./ataque-direcionado";

// Array
export const HumansCards = [
  Recruta,
  CavaleirodeElite,
  MagodeBatalha,
  ArquimagoSupremo,
  TaticadeGuerra,
  Reforcos,
  CampoProfano,
  AtaqueDirecionado
];