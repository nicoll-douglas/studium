import BookmarksIcon from "../components/icons/bookmarks-icon";
import CalculatorIcon from "../components/icons/calculator-icon";
import DashboardIcon from "../components/icons/dashboard-icon";
import NotesIcon from "../components/icons/notes-icon";
import PomodoroTimerIcon from "../components/icons/pomodoro-timer-icon";
import ToDoListIcon from "../components/icons/to-do-list-icon";

export default function mapToIcon(variant) {
  switch (variant) {
    case "Bookmarks":
      return BookmarksIcon;
    case "Notes":
      return NotesIcon;
    case "To Do List":
      return ToDoListIcon;
    case "Calculator":
      return CalculatorIcon;
    case "Pomodoro Timer":
      return PomodoroTimerIcon;
    default:
      return DashboardIcon;
  }
}
