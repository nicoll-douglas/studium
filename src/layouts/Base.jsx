import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/ui/header/Header";

export default function Base() {
  const location = useLocation();

  return (
    <>
      <Header currentPage={location.pathname} />
      <Outlet />
    </>
  );
}
