import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="flex w-full justify-between gap-2 p-2 bg-gray-50">
      <NavLink to="/">Logo</NavLink>
      <nav className="flex justify-between gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </div>
  );
}
