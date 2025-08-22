import { useState } from "react";
import { createInitialState, GameState } from "@/core";

export function useGameState() {
  const [state, setState] = useState<GameState>(createInitialState());
  return { state, setState };
}