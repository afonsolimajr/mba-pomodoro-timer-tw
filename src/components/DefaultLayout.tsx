import { Outlet } from "react-router";
import Header from "./Header";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col w-full gap-2 bg-amber-500 p-2 items-center">
      <div className="flex flex-col w-full max-w-4xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
