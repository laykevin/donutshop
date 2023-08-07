import React, { useEffect, useRef, useState } from "react";
import { menuData, IMenuItem, SetSortMenu, TMenuItemCategory } from "../lib";
import { useCategory } from ".";
import { Link } from "react-router-dom";

export const CategoryNav = ({
  setSortMenu,
  scrollDir,
  setScrollDir,
  setCategory,
}: SetSortMenu) => {
  const [isActive, setIsActive] = useState<TMenuItemCategory>("All");
  const [isHovered, setIsHovered] = useState(false);
  // const categoryNavRef = useRef<HTMLDivElement | null>(null);
  const [category] = useCategory();

  // useEffect(() => {
  //   setIsActive(category);
  // }, [category]);

  const categories: TMenuItemCategory[] = [
    "Donuts",
    "Breakfast",
    "Coffee & Drinks",
    "All",
  ];

  const scrollHandler = (
    elemRef: React.MutableRefObject<HTMLDivElement | null> | null
  ) => {
    console.log(elemRef?.current);
    if (elemRef?.current) window.scrollTo({ top: elemRef.current.offsetTop });
  };

  const filterMenuByCategory = (cat: TMenuItemCategory) => {
    setCategory(cat === category ? "All" : cat);
    // setIsActive(cat === isActive ? "All" : cat);
    setScrollDir("scrolling up");
    if (cat === "All" || cat === category) {
      setSortMenu(menuData);
      setCategory("All");
    } else {
      setSortMenu(
        menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
      );
    }
    // if (categoryNavRef) scrollHandler(categoryNavRef);
  };

  const mapCategories = (cat: TMenuItemCategory, index: number) => {
    return (
      <button
        key={index}
        className={
          category === cat && scrollDir === "scrolling up"
            ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
            : scrollDir === "scrolling down" && category === cat && isHovered
            ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300 py-4"
            : scrollDir === "scrolling down" && category === cat
            ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300"
            : isHovered
            ? "w-1/4 py-4 ease-in-out duration-300"
            : scrollDir === "scrolling down"
            ? "w-1/4 ease-in-out duration-300"
            : isHovered && scrollDir === "scrolling down"
            ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
            : "w-1/4 py-4 ease-in-out duration-300"
        }
        onClick={() => {
          filterMenuByCategory(cat);
        }}
      >
        {cat}
      </button>
    );
  };

  // const filterMenuByCategory = (category: TMenuItemCategory) => {
  //   setCategory(category);
  //   setIsActive(category === isActive ? "All" : category);
  //   setScrollDir("scrolling up");
  //   if (category === "All" || category === isActive) {
  //     setSortMenu(menuData);
  //     setCategory("All");
  //   } else {
  //     setSortMenu(
  //       menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
  //     );
  //   }
  // };

  // const mapCategories = (category: TMenuItemCategory, index: number) => {
  //   return (
  //     <button
  //       key={index}
  //       className={
  //         isActive === category && scrollDir === "scrolling up"
  //           ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
  //           : scrollDir === "scrolling down" &&
  //             isActive === category &&
  //             isHovered
  //           ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300 py-4"
  //           : scrollDir === "scrolling down" && isActive === category
  //           ? "w-1/4 text-red-400 bg-red-200 ease-in-out duration-300"
  //           : isHovered
  //           ? "w-1/4 py-4 ease-in-out duration-300"
  //           : scrollDir === "scrolling down"
  //           ? "w-1/4 ease-in-out duration-300"
  //           : isHovered && scrollDir === "scrolling down"
  //           ? "w-1/4 text-red-400 bg-red-200 py-4 ease-in-out duration-300"
  //           : "w-1/4 py-4 ease-in-out duration-300"
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
      style={{
        boxShadow: "0 5px 5px -5px black",
        backgroundColor: "#f9f9f9",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {categories.map(mapCategories)}
    </div>
  );
};
