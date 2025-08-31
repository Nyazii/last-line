import { UnitCard } from "../structure/unit-card";

export const LordeVampiro: UnitCard = {
    id: "u06",
    faction: "undead",
    name: "Lorde Vampiro",
    image: "genericimg.png",
    type: "unit",
    stage: 2,
    hitpoints: 12,
    moral: 0,

    attacks: [
        {
            name: "Saciar Fome",
            cost: 2,
            damage: 3,
            effectDescription: "Cure 2 de dano dessa Unidade.",
            //effect:
        },
        {
            name: "Forma Assombrosa",
            cost: 4,
            damage: 3,
            effectDescription: "Reduza em 1 a moral da Unidade Ofensiva do seu oponente e mova-a para a Retaguarda. <i>(Seu oponente escolhe a nova Unidade Ofensiva.)</i>",
            //effect:
        }
    ]
};