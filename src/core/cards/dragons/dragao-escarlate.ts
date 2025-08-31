import { UnitCard } from "../structure/unit-card";

export const DragaoEscarlate: UnitCard = {
    id: "u01",
    faction: "dragons",
    name: "Dragão Escarlate",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 8,
    moral: 0,

    attacks: [
        {
            name: "Garras Flamejantes",
            cost: 1,
            damage: 2
        },
        {
            name: "Sopro de Fogo",
            cost: 3,
            damage: 5
        }
    ]
};