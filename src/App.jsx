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
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route element={<AppLayout />}>
          <Route path="/dashboard"></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/to-do-list" element={<ToDoList />}></Route>
          <Route path="/calculator"></Route>
          <Route path="/dictionary"></Route>
          <Route path="/pomodoro-timer"></Route>
          <Route path="/bookmarks"></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
