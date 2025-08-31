import { UnitCard } from "../structure/unit-card";

export const DragaoAnciao: UnitCard = {
    id: "u03",
    faction: "dragons",
    name: "Dragão Ancião",
    image: "genericimg.png",
    type: "unit",
    stage: 2,
    hitpoints: 14,
    moral: 0,

    attacks:[
        {
            name: "Chamas Eternas",
            cost: 3,
            damage: 0,
            effectDescription: "Este ataque causa 3 de dano a qualquer unidade oponente.",
            //effect:
        },
        {
            name: "Rugido da Ruína",
            cost: 5,
            damage: 3,
            effectDescription: "Este ataque também causa 3 de dano a uma unidade de Retaguarda do oponente.",
            //effect:
        }
    ]
};