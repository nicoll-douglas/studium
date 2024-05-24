import MenuItem from "./MenuItem";

export default function SidebarMenu() {
  return (
    <nav
      className="fixed top-[76px] left-0 z-10 bg-LM-primary dark:bg-DM-primary flex flex-col col-span-3 border-r border-LM-accent-light dark:border-DM-accent-light sm:hidden pt-2 overflow-y-auto"
      aria-label="App"
      style={{
        height: "calc(100% - 152px)",
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
  );
}
