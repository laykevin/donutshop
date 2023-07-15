import { useState } from "react";
import { menuData } from "../lib";
// import { Dispatch, SetStateAction } from "react";

interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Drinks" | "All";
}
type Menu = IMenuItem[];

interface MenuProps {
  setSortMenu: React.Dispatch<React.SetStateAction<Menu>>;
}

type TMenuItemCategory = "Donuts" | "Breakfast" | "Drinks" | "All";

export const CategoryNav = ({ setSortMenu }: MenuProps) => {
  const [isActive, setIsActive] = useState<TMenuItemCategory>("All");
  const categories: TMenuItemCategory[] = [
    "Donuts",
    "Breakfast",
    "Drinks",
    "All",
  ];

  const filterMenuByCategory = (category: TMenuItemCategory) => {
    setIsActive(category === isActive ? "All" : category);
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
        className={isActive === category ? "w-1/4 text-red-400" : "w-1/4"}
        onClick={() => filterMenuByCategory(category)}
      >
        {category}
      </button>
    );
  };

  return (
    <div className="w-full sticky top-0">{categories.map(mapCategories)}</div>
  );
};
