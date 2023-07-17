import { menuData, IMenuItem, TMenu, TMenuProps } from "../lib";
import { UIEvent, useEffect, useRef, useState } from "react";
import { CategoryNav } from ".";

export const Menu: React.FC = () => {
  const [sortMenu, setSortMenu] = useState<TMenu>(menuData);
  const scrollHeightRef = useRef<HTMLDivElement>(null);

  // const [scrollDir, setScrollDir] = useState("scrolling up");

  // let oldScrollY = 0;

  const [scrollDir, setScrollDir] = useState("scrolling up");

  // const controlDirection = () => {
  //   if (window.scrollY > oldScrollY) {
  //     setScrollDir("scrolling down");
  //   } else {
  //     setScrollDir("scrolling up");
  //   }
  //   oldScrollY = window.scrollY;
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlDirection);
  //   return () => {
  //     window.removeEventListener("scroll", controlDirection);
  //   };
  // }, []);

  useEffect(() => {
    const threshold = 50;
    let lastScrollY = window.scrollY;
    let ticking = false;

    // function throttle(func: any, interval: number) {
    //   let lastCall = 0;
    //   return function () {
    //     const now = Date.now();
    //     if (lastCall + interval < now) {
    //       lastCall = now;
    //       return func.apply(this, arguments);
    //     }
    //   };
    // }

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 50;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
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

  // const onScroll = (e: UIEvent<HTMLDivElement>) => {
  //   console.log(scrollHeightRef.current?.scrollHeight);
  //   console.log("e", e.currentTarget.scrollTop);
  //   console.log("ffds");
  //   if (scrollHeightRef.current?.scrollHeight)
  //     if (scrollHeightRef.current?.scrollHeight > 60) console.log("onScroll");
  // };

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
    <>
      <CategoryNav setSortMenu={setSortMenu} scrollDir={scrollDir} />
      <div
        className="flex flex-wrap menu-fade"
        ref={scrollHeightRef}
        // onScroll={(e) => {
        //   onScroll(e);
        //   console.log("fsdf");
        // }}
      >
        {sortMenu.map(mapMenuItems)}
      </div>
    </>
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
