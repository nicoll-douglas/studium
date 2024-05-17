import MenuItem from "../components/ui/MenuItem";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full flex flex-grow">
      <nav
        className="fixed top-[76px] left-0 z-10 bg-LM-primary dark:bg-DM-primary flex flex-col mb-8 col-span-3 border-r border-LM-accent-light dark:border-DM-accent-light sm:hidden pt-2"
        aria-label="App"
        style={{
          height: "calc(100% - 76px)",
        }}
      >
        <ul className="flex-grow flex flex-col px-8 lg:px-6 mr-6">
          <MenuItem variant="Dashboard" role="listitem" />
          <MenuItem variant="To Do List" role="listitem" />
          <MenuItem variant="Notes" role="listitem" />
          <MenuItem variant="Bookmarks" role="listitem" />
          <MenuItem variant="Pomodoro Timer" role="listitem" />
          <MenuItem variant="Calculator" role="listitem" />
          <MenuItem variant="Dictionary" role="listitem" />
        </ul>
      </nav>
      <div className="flex-grow flex flex-col items-center px-4 py-24 ml-[234px] lg:ml-[218px] sm:ml-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
