import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../../../../components/ui/MenuItem";
import OpenMenuButton from "./OpenMenuButton";
import CloseMenuButton from "./CloseMenuButton";

export default function MobileMenu({ display }) {
  const location = useLocation();
  const [menu, setMenu] = useState({
    hidden: true,
    open: false,
  });

  const transitionDuration = 450;

  useEffect(() => {
    setMenu({
      hidden: true,
      open: false,
    });
  }, [location]);

  useEffect(() => {
    if (!menu.open) {
      setTimeout(setMenu, transitionDuration, {
        open: false,
        hidden: true,
      });
    }
  }, [menu.open]);

  useEffect(() => {
    if (!menu.hidden) {
      setMenu({
        hidden: false,
        open: true,
      });
    }
  }, [menu.hidden]);

  function handleToggle() {
    if (menu.open) {
      setMenu({
        ...menu,
        open: false,
      });
    } else {
      setMenu({
        ...menu,
        hidden: false,
      });
    }
  }

  return (
    <nav className={`ml-3 ${display} hidden`} aria-label="Site">
      <div
        className="w-dvw h-dvh bg-black opacity-40 fixed left-0 top-0"
        onClick={handleToggle}
        hidden={!menu.open}
      ></div>
      <OpenMenuButton onClick={handleToggle} expanded={menu.open} />
      <section
        className={`fixed w-dvw top-0 left-0 z-20 bg-LM-primary dark:bg-DM-primary drop-shadow-2xl rounded-b-3xl flex-col max-h-dvh overflow-y-scroll ${
          !menu.open ? "-translate-y-full" : ""
        }`}
        role="menu"
        style={{
          transition: `transform ${transitionDuration}ms ease`,
        }}
        hidden={menu.hidden}
      >
        <header className="flex justify-between font-nanum-pen text-LM-accent-light dark:text-DM-accent-light text-3xl items-center pt-5 mb-2 pl-8 pr-6">
          <h1>Menu</h1>
          <CloseMenuButton onClick={handleToggle} expanded={menu.open} />
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
