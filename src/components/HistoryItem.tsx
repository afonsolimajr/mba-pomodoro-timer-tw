type ItemStatus = "Em andamento" | "Interrompido" | "Concluído";

interface HistoryItemProps {
  description: string;
  duration: number;
  interval: number;
  status: ItemStatus;
}

export default function HistoryItem({
  description,
  duration,
  interval,
  status,
}: HistoryItemProps) {
  function statusColor(status: ItemStatus) {
    switch (status) {
      case "Em andamento":
        return "--yellow-dark";
      case "Interrompido":
        return "--red";
      case "Concluído":
        return "--green-light";
      default:
        return "placeholder";
    }
  }

  return (
    <div className="flex flex-col md:flex-row px-4 py-6 items-center justify-between gap-14 bg-[var(--big-number)]">
      <span className="w-full md:w-5/12">{description}</span>
      <div className="flex flex-col md:flex-row w-full md:w-7/12 items-center justify-between gap-14">
        <span className="w-full">{duration}</span>
        <span className="w-full">{interval}</span>
        <div className="flex w-full gap-2 items-center">
          <div
            className={`h-2 w-2 rounded-full bg-[var(${statusColor(status)})]`}
          />
          <span className="">{status}</span>
        </div>
      </div>
    </div>
  );
}
