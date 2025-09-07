import { UnitCard } from "../../cards";
import { GameState, Player} from "../state";

//Troca a carta da ofensiva com uma da retaguarda
export function switchUnit(state: GameState, player: Player, card: UnitCard): GameState {
    const currentPlayer = state.players[player];

    // Nova unidade ofensiva
    const newOffensive = card;

    // Nova retaguarda com a unidade trocada
    const newBackline = currentPlayer.backline.map(backlineCard =>
    backlineCard.instanceId === card.instanceId ? currentPlayer.offensive : backlineCard
    );
    //Novo estado do Player
    const newPlayerState = {
        ...currentPlayer,
        offensive: newOffensive,
        backline: newBackline 
    };

    //Novo estado do jogo
    return {
        ...state,
        players: {
            ...state.players,
            [player]: newPlayerState,
        },
    };
}