import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  });
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
