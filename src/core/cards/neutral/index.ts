import { InspirarCoragem } from "./inspirar-coragem";
import { OrdemEstrategica } from "./ordem-estrategica";
import { ReorganizarTaticas } from "./reorganizar-taticas";
import { TerrenoNeutro } from "./terreno-neutro";

//Cartas individuais
export * from "./inspirar-coragem";
export * from "./reorganizar-taticas";
export * from "./terreno-neutro";
export * from "./ordem-estrategica"

// Array
export const NeutralCards = [
    InspirarCoragem,
    ReorganizarTaticas,
    TerrenoNeutro,
    OrdemEstrategica
]