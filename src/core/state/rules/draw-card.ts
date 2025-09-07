import { GameState, Player } from "../state";

//Faz o jogador comprar uma carta do topo do deck.
export function drawCard(state: GameState, player: Player): GameState {
    const currentPlayer = state.players[player];
    
    //Remove a carta do topo do deck
    const [card, ...newDeck] = currentPlayer.deck;

    //Adiciona a carta à mão
    const newHand = [...currentPlayer.hand, card];

    //Novo estado do Player
    const newPlayerState = {
        ...currentPlayer,
        deck: newDeck,
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