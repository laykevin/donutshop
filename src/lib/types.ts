export interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Drinks" | "All";
}

export type TMenu = IMenuItem[];

export interface SetSortMenu {
  setSortMenu: React.Dispatch<React.SetStateAction<TMenu>>;
  scrollDir: string;
  setScrollDir: React.Dispatch<React.SetStateAction<string>>;
}

export type TMenuProps = {
  menuItem: IMenuItem;
};

export type TMenuItemCategory = "Donuts" | "Breakfast" | "Drinks" | "All";
