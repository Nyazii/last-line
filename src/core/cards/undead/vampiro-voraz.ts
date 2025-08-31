import { UnitCard } from "../structure/unit-card";

export const VampiroVoraz: UnitCard = {
    id: "u04",
    faction: "undead",
    name: "Vampiro Voraz",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 7,
    moral: 0,

    attacks: [
        {
            name: "Mordida",
            cost: 1,
            damage: 2
        },
        {
            name: "Maldição",
            cost: 2,
            damage: 1,
            effectDescription: "Remova 1 de moral da Unidade Ofensiva do seu oponente.",
            //effect:
        }
    ]
};