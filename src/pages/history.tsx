import HistoryItem from "../components/HistoryItem";

export default function History() {
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
        <HistoryItem
          description="Desenvolvimento web"
          duration={25}
          interval={15}
          status="Em andamento"
        />
        <HistoryItem
          description="Desenvolvimento backend"
          duration={40}
          interval={10}
          status="Interrompido"
        />
        <HistoryItem
          description="Desenvolvimento mobile"
          duration={60}
          interval={60}
          status="Concluído"
        />
      </div>
    </div>
  );
}
