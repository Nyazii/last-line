import { UnitCard } from "../structure/unit-card";

export const DragaoObsidiano: UnitCard = {
    id: "u02",
    faction: "dragons",
    name: "Dragão Obsidiano",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 10,
    moral: 0,

    attacks: [
        {
            name: "Cauda Pesada",
            cost: 1,
            damage: 2,
        },
        {
            name: "Pele Rochosa",
            cost: 3,
            damage: 2,
            effectDescription: "Durante o próximo turno do seu oponente, esta unidade sofre 2 a menos de dano de ataques",
            //effect:
        }
    ]
};