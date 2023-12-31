import { SetURLSearchParams } from 'react-router-dom';

export type TMenuItemCategory = 'Donuts' | 'Breakfast' | 'Coffee & Drinks' | 'All';

export interface IMenuItem {
  name: string;
  description: string;
  img: string;
  category: TMenuItemCategory;
}

export type TMenu = IMenuItem[];

export type TMenuProps = {
  menuItem: IMenuItem;
};

export interface DonutListProps {
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
  setSortMenu: React.Dispatch<React.SetStateAction<TMenu>>;
  sortMenu: TMenu;
  setSortParams: SetURLSearchParams;
  category: TMenuItemCategory;
}

export interface SetSortMenu {
  setSortMenu: React.Dispatch<React.SetStateAction<TMenu>>;
  scrollDir: 'scrolling up' | 'scrolling down';
  setScrollDir: React.Dispatch<React.SetStateAction<'scrolling up' | 'scrolling down'>>;
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
  setSortParams: SetURLSearchParams;
  category: TMenuItemCategory;
}

export type BannerProps = {
  imgPath: string;
  textContent: string;
};

export interface IMenuContext {
  category: TMenuItemCategory;
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
}

export type TMenuContext =
  | TMenuItemCategory
  | React.Dispatch<React.SetStateAction<TMenuItemCategory>>
  | IMenuContext
  | null;

export type FooterProps = {
  setCategory: React.Dispatch<React.SetStateAction<TMenuItemCategory>>;
};

export enum ECategoryToParams {
  'Donuts' = 'donuts',
  'Coffee & Drinks' = 'drinks',
  'Breakfast' = 'breakfast',
  'All' = '',
}
