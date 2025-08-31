import { UnitCard } from "../structure/unit-card";

export const AnjoGuardiao: UnitCard = {
    id: "u10",
    faction: "celestials",
    name: "Anjo Guardião",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 9,
    moral: 0,

    attacks: [
        {
            name: "Espada Radiante",
            cost: 1,
            damage: 2
        },
        {
            name: "Luz Curativa",
            cost: 2,
            damage: 0,
            effectDescription: "Cure 2 de dano de cada uma das suas Unidades.",
            //effect:
        }
    ]
};