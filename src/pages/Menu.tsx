import { DonutList, Banner } from "../components";
import { useState } from "react";

export const Menu = () => {
  const [menuIndex, setMenuIndex] = useState(0);

  const menuBannerData = [
    {
      imgPath:
        "https://media.wired.com/photos/6074aa620dfeac35a0cca839/master/w_2560%2Cc_limit/Science_donuts_465529983.jpg",
      textContent: "Made Fresh Daily!",
    },
    {
      imgPath:
        "https://lh3.googleusercontent.com/p/AF1QipNT6LNwNbaEv7dvzcj0pPnD8pxl-YxkNvSLt_xP=w1080-h608-p-no-v0",
      textContent: "Breakfast",
    },
    {
      imgPath:
        "https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_720,w_1280",
      textContent: "Coffee",
    },
  ];

  return (
    <>
      <Banner
        imgPath={menuBannerData[menuIndex].imgPath}
        textContent={menuBannerData[menuIndex].textContent}
      ></Banner>
      <DonutList setMenuIndex={setMenuIndex}></DonutList>
    </>
  );
};
