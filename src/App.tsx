import { useState } from "react";
import "./App.css";
import { Menu, NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Menu />
    </>
  );
}

export default App;
