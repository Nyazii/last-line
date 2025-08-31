import { CampoProfano } from "./campo-profano";
import { ConvocacaoSombria } from "./convocacao-sombria";
import { GhouldaCripta } from "./ghoul-da-cripta";
import { LordeVampiro } from "./lorde-vampiro";
import { NevoadaPerdicao } from "./nevoa-da-perdicao";
import { QuaseMorto } from "./quase-morto";
import { RessurreicaoMacabra } from "./ressurreicao-macabra";
import { VampiroVoraz } from "./vampiro-voraz";

//Cartas individuais
export * from "./quase-morto";
export * from "./vampiro-voraz";
export * from "./ghoul-da-cripta";
export * from "./lorde-vampiro";
export * from "./ressurreicao-macabra";
export * from "./nevoa-da-perdicao";
export * from "./campo-profano";
export * from "./convocacao-sombria";

// Array
export const UndeadCards = [
    QuaseMorto,
    VampiroVoraz,
    GhouldaCripta,
    LordeVampiro,
    RessurreicaoMacabra,
    NevoadaPerdicao,
    CampoProfano,
    ConvocacaoSombria
];