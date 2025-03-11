import { useContext } from "react";
import HistoryItem from "../components/HistoryItem";
import { CyclesContext } from "../contexts/CyclesContext";

export default function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <div className="mx-5 sm:mx-25">
      <h1>Meu histórico</h1>
      <div className="flex flex-col gap-1">
        <div className="hidden md:flex px-4 py-6 items-center justify-between gap-14 bg-[var(--divider)]">
          <span className="w-5/12">Tarefa</span>
          <div className="flex w-7/12 items-center justify-between gap-14">
            <span className="w-full">Duração</span>
            <span className="w-full">Início</span>
            <span className="w-full">Status</span>
          </div>
        </div>
        {cycles.map((cycle) => {
          return (
            <HistoryItem
              key={cycle.id}
              cycle={cycle}
              description={cycle.task}
              duration={cycle.minutesAmount}
              interval={cycle.startDate}
            />
          );
        })}
      </div>
    </div>
  );
}
