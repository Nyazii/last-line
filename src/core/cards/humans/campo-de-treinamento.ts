import { BattleEffectCard } from "../structure/battle-effect-card";

export const CampodeTreinamento: BattleEffectCard = {
    id: "b03",
    faction: "humans",
    name: "Campo de Treinamento",
    image: "genericimg.png",
    type: "battleeffect",

    cost: 2,
    description: "Sempre que promover, ganhe +1 moral na unidade promovida.",
    effect: () => {
        
    }
};