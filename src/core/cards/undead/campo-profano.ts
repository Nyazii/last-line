import { BattleEffectCard } from "../structure/battle-effect-card";

export const CampoProfano: BattleEffectCard = {
    id: "b02",
    faction: "undead",
    name: "Campo Profano",
    image: "genericimg.png",
    type: "battleeffect",

    cost: 3,
    description: "No inicio de seu turno, compre 1 carta.",
    effect: () => {
        
    }
};