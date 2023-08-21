import React, { useCallback, useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { Footer } from ".";
import { ECategoryToParams, TMenuItemCategory } from "../lib";
import { IoMdArrowDropdown, IoIosArrowForward } from "react-icons/io";

export const NavBar = () => {
  // const [category, setCategory] = useState<TMenuItemCategory>("All");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  console.log("RenderChecker");

  const dropdownTitles: TMenuItemCategory[] = [
    "Donuts",
    "Coffee & Drinks",
    "Breakfast",
  ];

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (menuIsOpen && e.currentTarget.id !== "menu-dropdown-button")
      setMenuIsOpen(false);
  };

  const mapMenuDropdown = (
    dropdownCategory: TMenuItemCategory,
    index: number
  ) => {
    return (
      <div className="border-b-2 py-2 ps-1 pe-2" key={index}>
        <Link
          to={`/menu?sort=${ECategoryToParams[dropdownCategory]}`}
          className="flex items-center gap-1"
        >
          <IoIosArrowForward size={15} />
          {dropdownCategory}
        </Link>
      </div>
    );
  };

  return (
    <>
      <nav
        className="flex justify-between items-center h-16 mx-auto px-16 bg-rose-400 text-white mb-1"
        onClick={handleClick}
      >
        <Link to={"/"}>
          <span className="os-font">Donuts Tyme</span>
        </Link>
        <div className="flex gap-5">
          <div className="relative group flex">
            <Link to={"/menu"}>Menu</Link>
            <button
              id="menu-dropdown-button"
              className={`${
                menuIsOpen ? "" : "invisible opacity-0"
              } bg-transparent group-hover:opacity-100 ease-in duration-300 group-hover:visible`}
              onClick={() => setMenuIsOpen((prev) => !prev)}
            >
              <IoMdArrowDropdown size={25} />
            </button>
            {menuIsOpen && (
              <div
                className="absolute flex flex-col bg-rose-700 gap-1 px-1 overflow-hidden rounded z-10 top-8 -translate-x-9 menu-animation text-xl w-max"
                style={{ fontFamily: "Handlee" }}
              >
                {dropdownTitles.map(mapMenuDropdown)}
              </div>
            )}
          </div>
          <Link to={"/about"}>About</Link>
          <span>555-555-5555</span>
        </div>
      </nav>
      <div onClick={handleClick}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export const useCategory = () => {
  return useOutletContext<
    [TMenuItemCategory, React.Dispatch<React.SetStateAction<TMenuItemCategory>>]
  >();
};
