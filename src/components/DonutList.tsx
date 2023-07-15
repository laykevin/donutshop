import { menuData } from "../lib";
import { useState } from "react";
import { CategoryNav } from ".";

interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Drinks" | "All";
}

type Menu = IMenuItem[];

type MenuProps = {
  menuItem: IMenuItem;
};

export const DonutList: React.FC = () => {
  const [sortMenu, setSortMenu] = useState<Menu>(menuData);
  console.log("fdfa");
  const mapMenuItems = (menuItem: IMenuItem, index: number) => {
    return (
      <>
        {menuItem.category !== sortMenu[index - 1]?.category && (
          <h2 className="w-full text-center" key={menuItem.category}>
            {menuItem.category}
          </h2>
        )}
        <MenuItemCard menuItem={menuItem} key={index}></MenuItemCard>
      </>
    );
  };

  return (
    <div
      className="flex flex-wrap menu-fade"
      // style={{ animation: sortMenu && "menu-fade 0.5s" }}
    >
      <CategoryNav setSortMenu={setSortMenu} />
      {/* {sortMenu.map((menuItem: IMenuItem, index: number) => (
        <MenuItemCard menuItem={menuItem} key={index}></MenuItemCard>
      ))} */}
      {sortMenu.map(mapMenuItems)}
    </div>
  );
};

const MenuItemCard = ({ menuItem }: MenuProps) => {
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
