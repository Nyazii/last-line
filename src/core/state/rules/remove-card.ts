import { Card } from "../../cards";
import { GameState, Player } from "../state";

//Remove uma carta específica da mão do jogador.
export function removeCard(state: GameState, player: Player, card: Card): GameState {
    const currentPlayer = state.players[player];

    //Nova mão sem a carta
    const newHand = currentPlayer.hand.filter(handCard => handCard.instanceId !== card.instanceId);

    //Novo estado do Player
    const newPlayerState = {
        ...currentPlayer,
        hand: newHand
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