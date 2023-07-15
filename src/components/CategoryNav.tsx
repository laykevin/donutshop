import { menuData } from "../lib";
// import { Dispatch, SetStateAction } from "react";

interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Drinks";
}
type Menu = IMenuItem[];

interface MenuProps {
  setSortMenu: React.Dispatch<React.SetStateAction<Menu>>;
}

type TMenuItemCategory = "Donuts" | "Breakfast" | "Drinks";

export const CategoryNav = ({ setSortMenu }: MenuProps) => {
  const filterMenuByCategory = (category: TMenuItemCategory) => {
    setSortMenu(
      menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
    );
  };

  return (
    <div className="w-full">
      <button className="w-1/4" onClick={() => filterMenuByCategory("Donuts")}>
        Donuts
      </button>
      <button
        className="w-1/4"
        onClick={() => filterMenuByCategory("Breakfast")}
      >
        Breakfast
      </button>
      <button className="w-1/4" onClick={() => filterMenuByCategory("Drinks")}>
        Drinks
      </button>
      <button className="w-1/4" onClick={() => setSortMenu(menuData)}>
        All
      </button>
    </div>
  );
};
