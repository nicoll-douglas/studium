import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";

export default function Header() {
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
    <header className="shadow-none transition-shadow duration-700 ease-in-out">
      <Logo />
      <nav className="lg:hidden" aria-label="Site" id="desktop-menu">
        <ul className="flex gap-8">
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Dashboard
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              To Do List
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Notes
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Bookmarks
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Pomodoro Timer
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Calculator
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-LM-accent-light dark:hover:text-DM-accent-light">
              Dictionary
            </a>
          </li>
        </ul>
      </nav>
      <DarkModeButton />
      <MobileMenu />
    </header>
  );
}
