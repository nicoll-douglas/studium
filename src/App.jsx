import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const location = useLocation();
  useEffect(() => {
    const currentTitle = document.title;
    const appPaths = [
      "/dashboard",
      "/notes",
      "/to-do-list",
      "/calculator",
      "/dictionary",
      "/pomodoro-timer",
      "/bookmarks",
    ];
    const pathname = location.pathname;

    if (pathname === "/" || pathname === "/home") {
      document.title = "Studium | The home of your on-the-fly study needs";
    } else if (appPaths.some((path) => path === pathname)) {
      document.title = "Studium | App";
    } else {
      document.title = "404 Page Not Found";
    }

    return () => {
      document.title = currentTitle;
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route element={<Layout />}>
        <Route path="/dashboard"></Route>
        <Route path="/notes"></Route>
        <Route path="/to-do-list"></Route>
        <Route path="/calculator"></Route>
        <Route path="/dictionary"></Route>
        <Route path="/pomodoro-timer"></Route>
        <Route path="/bookmarks"></Route>
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
