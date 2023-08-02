import { Link, Outlet } from "react-router-dom";
import { Footer } from ".";

export const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 mx-auto px-16 bg-rose-50">
        <Link to={"/"}>Donuts Tyme</Link>
        <div className="flex gap-5">
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <span>555-555-5555</span>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};
