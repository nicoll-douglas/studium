import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ hasNav }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        document
          .querySelector("header")
          .classList.replace("shadow-none", "shadow-xl");
      } else {
        document
          .querySelector("header")
          .classList.replace("shadow-xl", "shadow-none");
      }
    });
  }, []);

  return (
    <header className="shadow-none transition-shadow duration-700 ease-in-out flex px-8 lg:px-6 items-center sticky top-0 w-full bg-LM-primary dark:bg-DM-primary z-20 py-5">
      <Logo />
      {hasNav && (
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
            <li>
              <Link to="/dictionary">Dictionary</Link>
            </li>
          </ul>
        </nav>
      )}
      <DarkModeButton />
      {hasNav && <MobileMenu />}
    </header>
  );
}
