import { CommandCard } from "../structure/command-card";

export const OrdemEstrategica: CommandCard = {
    id:"c05",
    faction: "neutral",
    name: "Ordem Estratégica",
    image: "genericimg.png",
    type: "command",

    description: "Olhe as 3 primeiras cartas do seu deck, escolha 1 para a mão e coloque o resto no fundo.",
    effect: () => {
        
    }
}