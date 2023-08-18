import { useState } from "react";
import "./App.css";
import { NavBar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Menu, Home, About, NotFound } from "./pages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="menu/?sort=:paramCat?" element={<Menu />} />
          {/* <Route path="menu/:?paramCat" element={<Menu />} /> */}
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
