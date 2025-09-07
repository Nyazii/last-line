import { BattleEffectCard } from "./battle-effect-card";
import { CommandCard } from "./command-card";
import { EventCard } from "./event-card";
import { UnitCard } from "./unit-card";

//Tipo para representar quaquer carta
export type Card = UnitCard | EventCard | CommandCard | BattleEffectCard ;