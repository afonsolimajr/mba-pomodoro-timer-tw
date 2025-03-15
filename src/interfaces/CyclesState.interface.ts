import { Cycle } from "./Cycle.interface";

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}