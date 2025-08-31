import { EventCard } from "../structure/event-card";

export const CantoSagrado: EventCard = {
    id: "e08",
    faction: "celestials",
    name: "Canto Sagrado",
    image: "genericimg.png",
    type: "event",

    cost: 4,
    description: "Suas unidades não podem ser destruídas neste turno (ficam a 1 PV mínimo).",
    effect: () => {
        
    }
};