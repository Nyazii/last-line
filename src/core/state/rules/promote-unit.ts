import { UnitCard } from "../../cards";
import { GameState, Player } from "../state";

// Promove uma unidade
export function promoteUnit(state: GameState, player: Player, targetCard: UnitCard, promoteCard: UnitCard): GameState {
    const currentPlayer = state.players[player];
    let newPlayerState;

    // Identifica onde está a carta que será promovida
    if (currentPlayer.offensive.instanceId == targetCard.instanceId){
        //Novo estado do Player
        newPlayerState = {
            ...currentPlayer,
            offensive: promoteCard
        };
    } else {
        // Nova retaguarda com a unidade promovida
        const newBackline = currentPlayer.backline.map(backlineCard =>
        backlineCard.instanceId === targetCard.instanceId ? promoteCard : backlineCard);
        //Novo estado do Player
        newPlayerState = {
            ...currentPlayer,
            backline: newBackline
        };
    }
    return {
        ...state,
        players: {
            ...state.players,
            [player]: newPlayerState,
        },
    };
}