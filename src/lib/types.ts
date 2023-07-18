export interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: "Donuts" | "Breakfast" | "Coffee & Drinks" | "All";
}

export type TMenu = IMenuItem[];

export type TMenuProps = {
  menuItem: IMenuItem;
};

export interface setCategory {
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
}

export type TMenuItemCategory =
  | "Donuts"
  | "Breakfast"
  | "Coffee & Drinks"
  | "All";

export interface SetSortMenu {
  setSortMenu: React.Dispatch<React.SetStateAction<TMenu>>;
  scrollDir: string;
  setScrollDir: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
}

export type BannerProps = {
  imgPath: string;
  textContent: string;
};
