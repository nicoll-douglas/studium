import MenuItem from "../components/ui/MenuItem";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="w-full flex flex-grow">
      <nav
        className="relative z-10 bg-LM-primary dark:bg-DM-primary self-stretch flex flex-col mb-8 col-span-3 border-r border-LM-accent-light dark:border-DM-accent-light mt-1"
        aria-label="App"
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
      <div className="flex-grow flex items-center justify-center mt-1">
        <Outlet />
      </div>
    </div>
  );
}
