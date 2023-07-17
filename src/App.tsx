import { useState } from "react";
import "./App.css";
import { Menu, NavBar } from "./components";

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
