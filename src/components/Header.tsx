import { NavLink } from "react-router";

import logoImage from "../assets/logo.svg";
import { Scroll, Timer } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between gap-2 p-2">
      <img src={logoImage} />
      <nav className="flex justify-between gap-2">
        <NavLink to="/" className="p-2">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history" className="p-2">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </div>
  );
}
