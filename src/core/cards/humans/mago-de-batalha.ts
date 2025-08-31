import { UnitCard } from "../structure/unit-card";

export const MagodeBatalha: UnitCard = {
    id: "u08",
    faction: "humans",
    name: "Mago de Batalha",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 7,
    moral: 0,

    attacks: [
        {
            name: "Raio de Fogo",
            cost: 1,
            damage: 2
        },
        {
            name: "Mísseis Mágicos",
            cost: 3,
            damage: 0,
            effectDescription: "Este ataque causa 1 de dano a cada Unidade do seu oponente.",
            //effect:
        }
    ]
};