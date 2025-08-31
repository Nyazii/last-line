import { BattleEffectCard } from "../structure/battle-effect-card";

export const CampoSagrado: BattleEffectCard = {
    id: "b04",
    faction: "celestials",
    name: "Campos Sagrado",
    image: "genericimg.png",
    type: "battleeffect",

    cost: 4,
    description: "No inicio de seu turno, Cure 1 PV de todas as sua unidades.",
    effect: () => {

    }
};