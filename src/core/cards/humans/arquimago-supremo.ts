import { UnitCard } from "../structure/unit-card";

export const ArquimagoSupremo: UnitCard = {
    id: "u09",
    faction: "humans",
    name: "Arquimago Supremo",
    image: "genericimg.png",
    type: "unit",
    stage: 2,
    hitpoints: 11,
    moral: 0,

    attacks: [
        {
            name: "Meteoro",
            cost: 3,
            damage: 5,
        },
        {
            name: "Barreira Arcana",
            cost: 3,
            damage: 3,
            effectDescription: "Durante o próximo turno do seu oponente, esta unidade sofre 3 a menos de dano de ataques",
            //effect:
        }
    ]
};