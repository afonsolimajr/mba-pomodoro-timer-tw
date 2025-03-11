import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Cycle } from "../interfaces/Cycle.interface";

interface HistoryItemProps {
  cycle: Cycle;
  description: string;
  duration: number;
  interval: Date;
}

export default function HistoryItem({
  cycle,
  description,
  duration,
}: HistoryItemProps) {
  return (
    <div className="flex flex-col md:flex-row px-4 py-6 items-center justify-between gap-14 bg-[var(--big-number)]">
      <span className="w-full md:w-5/12">{description}</span>
      <div className="flex flex-col md:flex-row w-full md:w-7/12 items-center justify-between gap-14">
        <span className="w-full">{duration}</span>
        <span className="w-full">
          {formatDistanceToNow(cycle.startDate, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <div className="flex w-full gap-2 items-center">
          {cycle.finishedDate && (
            <div className="flex w-full gap-2 items-center">
              <div className={`h-2 w-2 rounded-full bg-[var(--green-light)]`} />
              <span className="">Concluído</span>
            </div>
          )}
          {cycle.interruptedDate && (
            <div className="flex w-full gap-2 items-center">
              <div className={`h-2 w-2 rounded-full bg-[var(--red)]`} />
              <span className="">Interrompido</span>
            </div>
          )}
          {!cycle.finishedDate && !cycle.interruptedDate && (
            <div className="flex w-full gap-2 items-center">
              <div className={`h-2 w-2 rounded-full bg-[var(--yellow-dark)]`} />
              <span className="">Em andamento</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
