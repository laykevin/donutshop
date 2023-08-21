import { useState } from "react";
import {
  menuData,
  IMenuItem,
  SetSortMenu,
  TMenuItemCategory,
  ECategoryToParams,
} from "../lib";
import { useCategory } from ".";

export const CategoryNav = ({
  setSortMenu,
  scrollDir,
  setScrollDir,
  setCategory,
  setSortParams,
  category,
}: SetSortMenu) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [category] = useCategory();

  const categories: TMenuItemCategory[] = [
    "Donuts",
    "Breakfast",
    "Coffee & Drinks",
    "All",
  ];

  const filterMenuByCategory = (cat: TMenuItemCategory) => {
    setCategory(cat === category ? "All" : cat);
    setSortParams(`sort=${ECategoryToParams[cat]}`);
    setScrollDir("scrolling up");
    if (cat === "All" || cat === category) {
      console.log("OVER HERE LOOK");
      setSortMenu(menuData);
      setCategory("All");
      setSortParams("");
    } else {
      setSortMenu(
        menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
      );
    }
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
