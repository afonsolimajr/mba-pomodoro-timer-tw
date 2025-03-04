import BigNumber from "./BigNumber";

export default function BigPanel() {
  return (
    <div className="flex gap-5 items-center justify-center">
      <BigNumber />
      <BigNumber />
      <div className="flex flex-col gap-6 items-center justify-center h-full">
        <div className="flex h-5 w-5 rounded-full bg-[var(--green)]" />
        <div className="flex h-5 w-5 rounded-full bg-[var(--green)]" />
      </div>
      <BigNumber />
      <BigNumber />
    </div>
  );
}
