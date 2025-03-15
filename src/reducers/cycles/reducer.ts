import { CycleActions } from "../../interfaces/CyclesActions.enum";
import { CyclesState } from "../../interfaces/CyclesState.interface";

export function cyclesReducer(state: CyclesState, action: { type: CycleActions; payload: any }) {
    console.log(state.cycles, action);
    
          switch (action.type) {
            case CycleActions.ADD_CYCLE:
              return {
                ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id,
              };
    
            case CycleActions.STOP_CYCLE:
              return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                  if (cycle.id === state.activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() };
                  } else {
                    return cycle;
                  }
                }),
                activeCycleId: null,
              };
    
            case CycleActions.FINISH_CYCLE:
              return {
                ...state,
                cycles: state.cycles.map((cycle) => {
                  if (cycle.id === state.activeCycleId) {
                    return { ...cycle, finishedDate: new Date() };
                  } else {
                    return cycle;
                  }
                }),
                activeCycleId: null,
              };
          }
}