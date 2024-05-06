import "./Header.css";
import Logo from "./Logo";
import DarkModeButton from "./DarkModeButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header>
      <Logo />
      <nav className="lg:hidden" aria-label="Site" id="desktop-menu">
        <ul className="flex gap-8">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>To Do List</a>
          </li>
          <li>
            <a>Notes</a>
          </li>
          <li>
            <a>Bookmarks</a>
          </li>
          <li>
            <a>Pomodoro Timer</a>
          </li>
          <li>
            <a>Calculator</a>
          </li>
          <li>
            <a>Dictionary</a>
          </li>
        </ul>
      </nav>
      <DarkModeButton />
      <MobileMenu />
    </header>
  );
}
