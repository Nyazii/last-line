import { UnitCard } from "../structure/unit-card";

export const ArcanjodaJustica: UnitCard = {
    id: "u12",
    faction: "celestials",
    name: "Arcanjo da Justiça",
    image: "genericimg.png",
    type: "unit",
    stage: 2,
    hitpoints: 13,
    moral: 0,

    attacks: [
        {
            name: "Lâmina Celestial",
            cost: 3,
            damage: 6,
        },
        {
            name: "Aura Divina",
            cost: 4,
            damage: 2,
            effectDescription: "Cure 5 de dano de 1 das suas Unidades.",
            //effect:
        }
    ]
};