import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    const currentTitle = document.title;

    const pathname = location.pathname;
    if (pathname === "/" || pathname === "/home") {
      document.title = "Studium | The home of your on-the-fly study needs";
      return;
    }

    document.title = `Studium | ${pathname
      .slice(1)
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ")}`;

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
        <Route path="/dictionary"></Route>
        <Route path="/bookmarks"></Route>
      </Route>
    </Routes>
  );
}

export default App;
