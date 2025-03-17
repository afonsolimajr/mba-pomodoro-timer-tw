import { Outlet } from "react-router";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col w-full gap-2 500 p-2 items-center h-full min-h-dvh justify-start">
      <div className="flex flex-col w-full max-w-6xl max-h-full sm:my-0 md:my-10 min-h-5/6 bg-[var(--elements)] py-10 gap-16">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
