import { DonutList, Banner } from "../components";
import { useEffect, useState, useRef } from "react";
import { menuData, TMenu, IMenuItem } from "../lib";
import { useCategory } from "../components";

export const Menu = () => {
  const [sortMenu, setSortMenu] = useState<TMenu>(menuData);
  const categoryNavRef = useRef<HTMLDivElement | null>(null);

  const [category, setCategory] = useCategory();

  const scrollHandler = (
    elemRef: React.MutableRefObject<HTMLDivElement | null> | null
  ) => {
    console.log(elemRef?.current?.offsetTop);
    if (elemRef?.current) window.scrollTo({ top: elemRef.current.offsetTop });
  };

  useEffect(() => {
    if (category === "All") setSortMenu(menuData);
    else {
      setSortMenu(
        menuData.filter((menuItem: IMenuItem) => menuItem.category === category)
      );
    }
  }, [setSortMenu, category]);

  useEffect(() => {
    if (categoryNavRef && window.scrollY > 448)
      scrollHandler(categoryNavRef), [category];
  });

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
      <div ref={categoryNavRef}>
        <DonutList
          setCategory={setCategory}
          setSortMenu={setSortMenu}
          sortMenu={sortMenu}
        ></DonutList>
      </div>
    </>
  );
};
