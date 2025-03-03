import { Routes, Route } from "react-router";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../pages/home";
import History from "../pages/history";

export default function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
