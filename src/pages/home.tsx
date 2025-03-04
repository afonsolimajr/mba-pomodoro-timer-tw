import { Play } from "@phosphor-icons/react";
import BigPanel from "../components/BigPanel";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center gap-3">
      <div>form</div>
      <BigPanel />
      <div>
        <button className="flex gap-3 w-2xl bg-green-800 items-center justify-center">
          <Play size={28} /> Começar
        </button>
      </div>
    </div>
  );
}
