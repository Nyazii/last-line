import { GameState, Phase } from "../state";

//Troca a fase do jogo
export function nextPhase(state: GameState): GameState {
    const phases: Phase[] = ["Draw", "Turn", "Attack", "Pass"];
    const currentPhase = phases.findIndex(phase => phase === state.phase);
    const nextPhase = (currentPhase + 1) % phases.length;
    return {
        ...state,
        phase: phases[nextPhase],
    }
}