import { UnitCard } from "../structure/unit-card";

export const CavaleirodeElite: UnitCard = {
    id: "u07",
    faction: "humans",
    name: "Cavaleiro de Elite",
    image: "genericimg.png",
    type: "unit",
    stage: 1,
    hitpoints: 9,
    moral: 0,

    attacks: [
        {
            name: "Espadada",
            cost: 1,
            damage: 2
        },
        {
            name: "Golpe letal",
            cost: 3,
            damage: 5
        }
    ]
};