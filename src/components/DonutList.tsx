import { menuData, IMenuItem, TMenu, TMenuProps, SetMenuIndex } from "../lib";
import { UIEvent, useEffect, useRef, useState } from "react";
import { CategoryNav } from ".";

export const DonutList = ({ setMenuIndex }: SetMenuIndex) => {
  const [sortMenu, setSortMenu] = useState<TMenu>(menuData);
  const scrollHeightRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState("scrolling up");

  useEffect(() => {
    console.log(window.scrollY);

    // if (window.scrollY < 500) return;
    const threshold = 75;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 75;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking && window.scrollY > 375) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    if (scrollHeightRef.current) {
      // scrollHeightRef.current.scrollTop = scrollHeightRef.current.scrollHeight;
      console.log("fgdfsg");
      console.log(scrollHeightRef.current?.scrollHeight);
    }
  }, [sortMenu]);

  const mapMenuItems = (menuItem: IMenuItem, index: number) => {
    return (
      <>
        {menuItem.category !== sortMenu[index - 1]?.category && (
          <h2 className="w-full text-center py-4" key={menuItem.category}>
            {menuItem.category}
          </h2>
        )}
        <MenuItemCard menuItem={menuItem} key={index}></MenuItemCard>
      </>
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* <div className="menu-banner h-64 md:h-96 relative">
        <div className="h-full bg-black opacity-50"></div>
        <span className="text-white opacity-100 text-4xl md:text-8x1 lg:text-9xl absolute inset-0 top-1/4 text-center">
          Made Fresh Daily!
        </span>
      </div> */}
      <CategoryNav
        setSortMenu={setSortMenu}
        scrollDir={scrollDir}
        setScrollDir={setScrollDir}
        setMenuIndex={setMenuIndex}
      />
      <div className="flex flex-wrap menu-fade root" ref={scrollHeightRef}>
        {sortMenu.map(mapMenuItems)}
      </div>
    </div>
  );
};

const MenuItemCard = ({ menuItem }: TMenuProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-1/2 menu-fade">
      <img
        className="w-1/5 aspect-square p-2.5"
        style={{ minWidth: "80px" }}
        src={menuItem.img}
        alt={menuItem.name}
      />
      <div className="pl-2.5 text-center md:text-left">
        <p className="font-black">{menuItem.name}</p>
        <p>{menuItem.description}</p>
      </div>
    </div>
  );
};
