export interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Coffee & Drinks" | "All";
}

export type TMenu = IMenuItem[];

export interface SetSortMenu {
  setSortMenu: React.Dispatch<React.SetStateAction<TMenu>>;
  scrollDir: string;
  setScrollDir: React.Dispatch<React.SetStateAction<string>>;
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
}

export type TMenuProps = {
  menuItem: IMenuItem;
};

export interface SetMenuIndex {
  setMenuIndex: React.Dispatch<React.SetStateAction<number>>;
}

export type TMenuItemCategory =
  | "Donuts"
  | "Breakfast"
  | "Coffee & Drinks"
  | "All";

export type BannerProps = {
  imgPath: string;
  textContent: string;
};
