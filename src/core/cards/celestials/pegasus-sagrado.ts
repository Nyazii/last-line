import { UnitCard } from "../structure/unit-card";

export const PegasusSagrado: UnitCard = {
    id: "u11",
    faction: "celestials",
    name: "Pegasus Sagrado",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 8,
    moral: 0,

    attacks: [
        {
            name: "Investida",
            cost: 1,
            damage: 2
        },
        {
            name: "Asas da Proteção",
            cost: 2,
            damage: 0,
            effectDescription: "Durante o próximo turno do seu oponente, todas as suas Unidade sofre 2 a menos de dano de ataques",
            //effect:
        }
    ]
};