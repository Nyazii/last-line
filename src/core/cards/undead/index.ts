import { GhouldaCripta } from "./ghoul-da-cripta";
import { LordeVampiro } from "./lorde-vampiro";
import { QuaseMorto } from "./quase-morto";
import { VampiroVoraz } from "./vampiro-voraz";

//Cartas individuais
export * from "./quase-morto";
export * from "./vampiro-voraz";
export * from "./ghoul-da-cripta";
export * from "./lorde-vampiro";

// Array
export const UndeadCards = [
    QuaseMorto,
    VampiroVoraz,
    GhouldaCripta,
    LordeVampiro
];