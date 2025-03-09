import { useEffect } from "react";
import { Cycle } from "../interfaces/Cycle.interface";
import BigNumber from "./BigNumber";

export default function BigPanel({
  activeCycle,
  amountSecondsPassed,
}: {
  activeCycle: Cycle | undefined;
  amountSecondsPassed: number;
}) {
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutesFormatted = String(minutesAmount).padStart(2, "0");
  const secondsFormatted = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesFormatted}:${secondsFormatted}`;
    }
  }, [minutesFormatted, secondsFormatted, activeCycle]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
      <div className="flex gap-5 items-center justify-center">
        <BigNumber display={minutesFormatted[0]} />
        <BigNumber display={minutesFormatted[1]} />
      </div>
      <div className="hidden sm:flex flex-col gap-6 items-center justify-center h-full">
        <div className="flex h-8 w-8 rounded-full bg-[var(--green)]" />
        <div className="flex h-8 w-8 rounded-full bg-[var(--green)]" />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <BigNumber display={secondsFormatted[0]} />
        <BigNumber display={secondsFormatted[1]} />
      </div>
    </div>
  );
}
