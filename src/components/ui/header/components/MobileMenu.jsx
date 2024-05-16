import { useState, useRef } from "react";

import MenuItem from "../../MenuItem";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";

export default function MobileMenu() {
  const [menu, setMenu] = useState({
    open: false,
    hidden: true,
  });
  const menuRef = useRef(null);

  function handleToggle() {
    setMenu({
      ...menu,
      hidden: false,
    });
    setTimeout(setMenu, 0, (prevMenu) => ({
      ...prevMenu,
      open: !prevMenu.open,
    }));
  }

  function handleTransitionEnd() {
    if (!menu.open) {
      setMenu({
        ...menu,
        hidden: true,
      });
    }
  }

  return (
    <nav className="ml-3 lg:flex hidden" aria-label="Site">
      <div
        className="w-dvw h-dvh bg-black opacity-40 fixed left-0 top-0"
        onClick={handleToggle}
        hidden={!menu.open}
      ></div>
      <OpenMenuButton onClick={handleToggle} aria-expanded={menu.open} />
      <section
        className={`fixed w-dvw top-0 left-0 z-20 bg-LM-primary dark:bg-DM-primary drop-shadow-2xl rounded-b-3xl flex-col max-h-dvh overflow-scroll ${
          !menu.open ? "-translate-y-full" : ""
        }`}
        role="menu"
        ref={menuRef}
        style={{
          transition: "transform 450ms ease",
        }}
        onTransitionEnd={handleTransitionEnd}
        hidden={menu.hidden}
      >
        <header className="flex justify-between font-nanum-pen text-LM-accent-light dark:text-DM-accent-light text-3xl items-center pt-5 mb-2 pl-8 pr-6">
          <h1>Menu</h1>
          <CloseMenuButton onClick={handleToggle} aria-expanded={menu.open} />
        </header>
        <ul className="flex gap-8 lg:gap-0 lg:flex-col lg:mx-8 lg:mb-6">
          <MenuItem variant="Dashboard" role="menuitem" />
          <MenuItem variant="To Do List" role="menuitem" />
          <MenuItem variant="Notes" role="menuitem" />
          <MenuItem variant="Bookmarks" role="menuitem" />
          <MenuItem variant="Pomodoro Timer" role="menuitem" />
          <MenuItem variant="Calculator" role="menuitem" />
          <MenuItem variant="Dictionary" role="menuitem" />
        </ul>
      </section>
    </nav>
  );
}
