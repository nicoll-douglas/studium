import BookmarksIcon from "./icons/bookmarks-icon";
import CalculatorIcon from "./icons/calculator-icon";
import DashboardIcon from "./icons/dashboard-icon";
import DictionaryIcon from "./icons/dictionary-icon";
import NotesIcon from "./icons/notes-icon";
import PomodoroTimerIcon from "./icons/pomodoro-timer-icon";
import ToDoListIcon from "./icons/to-do-list-icon";
import { NavLink } from "react-router-dom";

export default function MenuItem({ variant, role }) {
  let SVGComponent;

  switch (variant) {
    case "Bookmarks":
      SVGComponent = BookmarksIcon;
      break;
    case "Notes":
      SVGComponent = NotesIcon;
      break;
    case "Dictionary":
      SVGComponent = DictionaryIcon;
      break;
    case "Pomodoro Timer":
      SVGComponent = PomodoroTimerIcon;
      break;
    case "Calculator":
      SVGComponent = CalculatorIcon;
      break;
    case "To Do List":
      SVGComponent = ToDoListIcon;
      break;
    default:
      SVGComponent = DashboardIcon;
  }

  return (
    <li role={role}>
      <NavLink
        className="group flex gap-2 items-center w-full py-4 cursor-pointer"
        to={`/${variant
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("-")}`}
      >
        <SVGComponent className="group-hover:fill-LM-accent-light dark:group-hover:fill-DM-accent-light" />
        {variant}
      </NavLink>
    </li>
  );
}
