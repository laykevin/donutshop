import { useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { Footer } from ".";
import { TMenuItemCategory } from "../lib";

export const NavBar = () => {
  const [category, setCategory] = useState<TMenuItemCategory>("All");

  return (
    <>
      <nav className="flex justify-between items-center h-16 mx-auto px-16 bg-rose-50">
        <Link to={"/"}>Donuts Tyme</Link>
        <div className="flex gap-5">
          <Link to={"/menu"} onClick={() => setCategory("All")}>
            Menu
          </Link>
          <Link to={"/about"}>About</Link>
          <span>555-555-5555</span>
        </div>
      </nav>
      <Outlet context={[category, setCategory]} />
      <Footer setCategory={setCategory} />
    </>
  );
};

export const useCategory = () => {
  return useOutletContext<
    [TMenuItemCategory, React.Dispatch<React.SetStateAction<TMenuItemCategory>>]
  >();
};
