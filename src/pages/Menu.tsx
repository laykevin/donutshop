import { DonutList, Banner } from "../components";
import { useEffect, useState } from "react";
import { TMenuItemCategory, menuData, TMenu, IMenuItem } from "../lib";
import { useCategory } from "../components";

export const Menu = () => {
  const [sortMenu, setSortMenu] = useState<TMenu>(menuData);
  const [isActive, setIsActive] = useState<TMenuItemCategory>("All");

  const [category, setCategory] = useCategory();

  useEffect(() => {
    if (category === "All") setSortMenu(menuData);
    else {
      setSortMenu(
        menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
      );
    }
  }, [setSortMenu, category]);

  const filterMenuByCategory = (category: TMenuItemCategory) => {
    setCategory(category);
    setIsActive(category === isActive ? "All" : category);
    // setScrollDir("scrolling up");
    if (category === "All" || category === isActive) {
      setSortMenu(menuData);
      setCategory("All");
    } else {
      setSortMenu(
        menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
      );
    }
  };

  const menuBannerData = {
    Donuts: {
      imgPath:
        "https://media.wired.com/photos/6074aa620dfeac35a0cca839/master/w_2560%2Cc_limit/Science_donuts_465529983.jpg",
      textContent: "Made Fresh Daily!",
    },
    Breakfast: {
      imgPath:
        "https://lh3.googleusercontent.com/p/AF1QipNT6LNwNbaEv7dvzcj0pPnD8pxl-YxkNvSLt_xP=w1080-h608-p-no-v0",
      textContent: "Breakfast",
    },
    "Coffee & Drinks": {
      imgPath:
        "https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280",
      textContent: "Coffee",
    },
    All: {
      imgPath:
        "https://media.wired.com/photos/6074aa620dfeac35a0cca839/master/w_2560%2Cc_limit/Science_donuts_465529983.jpg",
      textContent: "Made Fresh Daily!",
    },
  };

  return (
    <>
      <Banner
        imgPath={menuBannerData[category].imgPath}
        textContent={menuBannerData[category].textContent}
      ></Banner>
      <DonutList
        setCategory={setCategory}
        setSortMenu={setSortMenu}
        sortMenu={sortMenu}
      ></DonutList>
    </>
  );
};
