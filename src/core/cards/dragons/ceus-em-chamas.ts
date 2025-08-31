import { BattleEffectCard } from "../structure/battle-effect-card";

export const CeusemChamas: BattleEffectCard = {
    id: "b01",
    faction: "dragons",
    name: "Céus em chamas",
    image: "genericimg.png",
    type: "battleeffect",

    cost: 3,
    description: "Toda vez que um Dragão atacar, ganhe +1 moral em qualquer unidade sua.",
    effect: () => {
        
    }
};