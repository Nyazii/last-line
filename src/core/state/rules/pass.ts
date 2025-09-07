import { GameState } from "../state";

//Troca o jogador ativo
export function pass(state: GameState): GameState {
    //Verifica de quem é o turno e troca para o outro jogador
    const nextPlayer = state.currentTurn === "p1" ? "p2" : "p1";
    return {
        ...state,
        currentTurn: nextPlayer,
    };
}