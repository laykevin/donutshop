import { useState, useRef, useEffect } from "react";
import { menuData, IMenuItem, SetSortMenu, TMenuItemCategory } from "../lib";

export const CategoryNav = ({
  setSortMenu,
  scrollDir,
  setScrollDir,
}: SetSortMenu) => {
  const [isActive, setIsActive] = useState<TMenuItemCategory>("All");
  const [isHovered, setIsHovered] = useState(false);

  const categories: TMenuItemCategory[] = [
    "Donuts",
    "Breakfast",
    "Drinks",
    "All",
  ];

  const filterMenuByCategory = (category: TMenuItemCategory) => {
    setIsActive(category === isActive ? "All" : category);
    setScrollDir("scrolling up");
    category === "All" || category === isActive
      ? setSortMenu(menuData)
      : setSortMenu(
          menuData.filter(
            (menuItem: IMenuItem) => menuItem.category === category
          )
        );
  };

  const mapCategories = (category: TMenuItemCategory, index: number) => {
    return (
      <button
        key={index}
        className={
          isActive === category && scrollDir === "scrolling up"
            ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
            : scrollDir === "scrolling down" &&
              isActive === category &&
              isHovered
            ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300 py-4"
            : scrollDir === "scrolling down" && isActive === category
            ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300"
            : isHovered
            ? "w-1/4 py-4 ease-in-out duration-300"
            : scrollDir === "scrolling down"
            ? "w-1/4 ease-in-out duration-300"
            : isHovered && scrollDir === "scrolling down"
            ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
            : "w-1/4 py-4 ease-in-out duration-300"
        }
        onClick={() => filterMenuByCategory(category)}
      >
        {category}
      </button>
    );
  };

  // const mapCategories = (category: TMenuItemCategory, index: number) => {
  //   return (
  //     <button
  //       key={index}
  //       className={
  //         isActive === category
  //           ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300 h-full"
  //           : "w-1/4 ease-in-out duration-300 h-full"
  //       }
  //       onClick={() => filterMenuByCategory(category)}
  //     >
  //       {category}
  //     </button>
  //   );
  // };

  return (
    <div
      className={
        scrollDir === "scrolling down"
          ? "w-full sticky top-0 hover:min-h-max ease-in-out duration-300"
          : scrollDir === "scrolling down"
          ? "w-full sticky top-0 h-14"
          : "w-full sticky top-0 max-h-14"
      }
      style={{ boxShadow: "0 5px 5px -5px black", backgroundColor: "#f9f9f9" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {categories.map(mapCategories)}
    </div>
  );
};
