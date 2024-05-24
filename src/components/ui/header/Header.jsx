import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

import Logo from "./components/Logo";
import DarkModeButton from "./components/DarkModeButton";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      headerRef.current.classList.replace("shadow-none", "shadow-xl");
    } else {
      headerRef.current.classList.replace("shadow-xl", "shadow-none");
    }
  }

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <header
      className="shadow-none transition-shadow duration-700 ease-in-out flex px-8 lg:px-6 items-center sticky top-0 w-full bg-LM-primary dark:bg-DM-primary z-30 py-5"
      ref={headerRef}
    >
      <Logo />
      {isHomePage && (
        <nav className="lg:hidden" aria-label="Site">
          <ul className="flex gap-8">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/to-do-list">To Do List</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/bookmarks">Bookmarks</Link>
            </li>
            <li>
              <Link to="/pomodoro-timer">Pomodoro Timer</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
        </nav>
      )}
      <DarkModeButton />
      <MobileMenu display={isHomePage ? "lg:flex" : "sm:flex"} />
    </header>
  );
}
