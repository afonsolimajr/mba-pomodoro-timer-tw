import { Outlet } from "react-router";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col w-full gap-2 500 p-2 items-center">
      <div className="flex flex-col w-full max-w-6xl sm:my-0 md:my-20 min-h-[744px] bg-[var(--elements)] py-10 gap-16">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
