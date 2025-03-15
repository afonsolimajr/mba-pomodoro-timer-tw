import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle } from "../interfaces/Cycle.interface";
import { differenceInSeconds } from "date-fns";
import { cyclesReducer } from "../reducers/cycles/reducer";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  setCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interrupCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function CyclesContextProvider({ children }: { children: ReactNode }) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initalState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@mba-pomodoro:cycles-state"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initalState;
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const [amountSecondsPassed, setAmountSencondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSencondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {}

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    setAmountSencondsPassed(0);
  }

  function interrupCurrentCycle() {
    dispatch(setCurrentCycleAsFinishedAction());
  }

  function setActiveCycleAsFinished() {
    dispatch(interruptCurrentCycleAction());
  }

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const totalSeconds = activeCycle.minutesAmount * 60;
        const secondsPassed = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );

        if (secondsPassed > totalSeconds) {
          setActiveCycleAsFinished();
        } else {
          setAmountSencondsPassed(
            differenceInSeconds(new Date(), activeCycle.startDate)
          );
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeCycle]);

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@mba-pomodoro:cycles-state", stateJSON);
  }, [cyclesState]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interrupCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
