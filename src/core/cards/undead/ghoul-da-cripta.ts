import { UnitCard } from "../structure/unit-card";

export const GhouldaCripta: UnitCard = {
    id: "u05",
    faction: "undead",
    name: "Ghoul da Cripta",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 8,
    moral: 0,

    attacks: [
        {
            name: "Garras Infectadas",
            cost: 1,
            damage: 2,
        },
        {
            name: "Carniçal Insano",
            cost: 2,
            damage: 1,
            effectDescription: "2 moral, 1 dano, Durante seu próximo turno, os ataques desta Unidade causa 2 a mais de dano.",
            //effect:
        }
    ]
};