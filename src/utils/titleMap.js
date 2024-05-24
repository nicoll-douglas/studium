export default function mapToTitle(pathname) {
  return {
    "/dashboard": "Dashboard",
    "/calculator": "Calculator",
    "/pomodoro-timer": "Pomodoro Timer",
    "/bookmarks": "Bookmarks",
    "/to-do-list": "To Do List",
    "/notes": "Notes",
    "/home": "The home of your on the fly study needs",
    "/": "The home of your on the fly study needs",
  }[pathname];
}
