import { Cycle } from "../../interfaces/Cycle.interface";
import { CycleActions } from "../../interfaces/CyclesActions.enum";

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: CycleActions.ADD_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function setCurrentCycleAsFinishedAction() {
    return {
        type: CycleActions.FINISH_CYCLE,
        payload: {}
    }
}

export function interruptCurrentCycleAction() {
    return {
        type: CycleActions.STOP_CYCLE,
        payload: {}
    }
}