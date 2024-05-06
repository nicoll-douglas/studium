import { useState } from "react";
import MenuItem from "./MenuItem";

export default function MobileMenu() {
  const [isHidden, setIsHidden] = useState(true);

  const transitionDuration = 500; // ms
  const transitionDistance = 500; // px

  function handleOpen() {
    setIsHidden(!isHidden);
    requestAnimationFrame(() => {
      document.querySelector("#site-menu").style.transform = `translateY(0px)`;
    });
  }

  function handleClose() {
    setTimeout(setIsHidden, transitionDuration, !isHidden);
    document.querySelector(
      "#site-menu"
    ).style.transform = `translateY(-${transitionDistance}px)`;
  }

  return (
    <nav className="ml-3 lg:flex hidden" aria-label="Site">
      <div
        className="w-dvw h-dvh bg-black opacity-30 fixed left-0 top-0"
        hidden={isHidden}
        onClick={handleClose}
        id="screen-opacity-wrapper"
      ></div>
      <button
        className="group relative"
        aria-label="Open menu"
        aria-haspopup="menu"
        aria-controls="site-menu"
        aria-expanded={!isHidden}
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 -960 960 960"
          className="fill-LM-accent-light dark:fill-DM-accent-light group-hover:fill-LM-accent-dark dark:group-hover:fill-DM-accent-dark"
          aria-hidden="true"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      <div
        className="fixed w-dvw top-0 left-0 z-20 bg-LM-primary dark:bg-DM-primary rounded-b-3xl drop-shadow-2xl flex-col"
        role="menu"
        id="site-menu"
        hidden={isHidden}
        style={{
          transition: `transform ${transitionDuration}ms ease-in-out`,
          transform: `translateY(-${transitionDistance}px)`,
        }}
      >
        <div className="flex justify-between font-nanum-pen text-LM-accent-light dark:text-DM-accent-light text-3xl items-center pt-5 mb-2 pl-8 pr-6">
          Menu
          <button
            className="group"
            aria-label="Close menu"
            aria-controls="site-menu"
            aria-expanded={!isHidden}
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="fill-LM-accent-light group-hover:fill-LM-accent-dark dark:fill-DM-accent-light dark:group-hover:fill-DM-accent-dark"
              aria-hidden="true"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>
        <ul className="flex gap-8 lg:gap-0 lg:flex-col lg:mx-8 lg:mb-6">
          <MenuItem variant="Dashboard" />
          <MenuItem variant="To Do List" />
          <MenuItem variant="Notes" />
          <MenuItem variant="Bookmarks" />
          <MenuItem variant="Pomodoro Timer" />
          <MenuItem variant="Calculator" />
          <MenuItem variant="Dictionary" />
        </ul>
      </div>
    </nav>
  );
}
