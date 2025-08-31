import { BattleEffectCard } from "../structure/battle-effect-card";

export const TerrenoNeutro: BattleEffectCard = {
    id: "b05",
    faction: "neutral",
    name: "Terreno Neutro",
    image: "genericimg.png",
    type: "battleeffect",

    cost: 3,
    description: "No inicio de seu turno, conceda 1 de moral a uma unidade sua.",
    effect: () => {

    }
};