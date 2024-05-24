import { Outlet } from "react-router-dom";
import SidebarMenu from "../components/ui/SidebarMenu";

export default function AppLayout() {
  return (
    <div className="w-full flex flex-grow">
      <SidebarMenu />
      <div className="flex-grow flex flex-col items-center px-4 pt-16 pb-19 ml-[234px] lg:ml-[218px] sm:ml-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
