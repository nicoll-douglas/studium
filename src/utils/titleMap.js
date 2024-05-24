export default function mapToTitle(pathname) {
  switch (pathname) {
    case "/dashboard":
      return "Dashboard";
    case "/calculator":
      return "Calculator";
    case "/pomodoro-timer":
      return "Pomodoro Timer";
    case "/bookmarks":
      return "Bookmarks";
    case "/to-do-list":
      return "To Do List";
    default:
      return "The home of your on the fly study needs";
  }
}
