import { Play } from "@phosphor-icons/react";
import BigPanel from "../components/BigPanel";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10 md:gap-20">
      <div className="flex w-full max-w-2xl flex-col md:flex-row  items-center justify-between gap-2">
        <span>Vou trabalhar em</span>
        <input className="" placeholder="Dê um nome para o seu projeto" />
        <div className="flex items-center justify-between gap-2">
          <span>durante</span>
          <input className="w-12 text-center border-b" placeholder="-00+" />
          <span>minutos.</span>
        </div>
      </div>
      <BigPanel />
      <div className="flex w-full px-3 justify-center items-center">
        <button className="flex gap-3 w-full max-w-2xl bg-green-800 items-center justify-center">
          <Play size={28} /> Começar
        </button>
      </div>
    </div>
  );
}
