export default function BigNumber({ display }: { display: string }) {
  return (
    <div className="flex h-[200px] bg-[var(--big-number)] px-2 pb-3 items-center justify-center rounded-md">
      <span className="text-[12rem] m-0 p-0 font-bold">{display}</span>
    </div>
  );
}
