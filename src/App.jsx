import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Base from "./layouts/Base";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ToDoList from "./pages/ToDoList/ToDoList";
import AppLayout from "./layouts/AppLayout";
import mapToTitle from "./utils/titleMap";
import Notes from "./pages/Notes/Notes";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import PomodoroTimer from "./pages/PomodoroTimer/PomodoroTimer";
import Calculator from "./pages/Calculator/Calculator";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentTitle = document.title;
    const mapping = mapToTitle(location.pathname);
    document.title = mapping ? `Studium | ${mapping}` : "404 Page Not Found";
    return () => {
      document.title = currentTitle;
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<Base />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pomodoro-timer" element={<PomodoroTimer />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
