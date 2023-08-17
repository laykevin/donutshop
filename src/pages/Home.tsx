import { Banner, ButtonLink, Carousel, useCategory } from "../components";
import { Link } from "react-router-dom";
import { TMenuItemCategory } from "../lib";

export const Home = () => {
  return (
    <>
      <Banner
        imgPath={
          "https://lh3.googleusercontent.com/p/AF1QipPmk0sjqUfdNcJRYp-lRNaLSe7wkH-OtqG_DmSg=s1360-w1360-h1020"
        }
        textContent={"Home Change Me!"}
      ></Banner>
      <HomeCard />
      <ThreeImagesCard />
      {/* <HomeCard />
      <ThreeImagesCard /> */}
    </>
  );
};

const HomeCard = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="flex flex-col items-center justify-center max-w-7xl py-5 m-auto">
        <h1 className="text-center py-4 text-rose-800 max-w-2xl m-auto rounded-l ">
          <span
            className="shadow-2xl rounded-l shadow-rose-200 px-4 py-2"
            style={{
              background:
                "linear-gradient(to bottom, #f4f4f4, rgb(255 228 230)",
              fontFamily: "Rampart One",
            }}
          >
            Donuts Tyme
          </span>
        </h1>
      </div>
      {/* <div className="flex">
        <img
          className="aspect-video w-3/5 drop-shadow-xl"
          src={
            "https://images.unsplash.com/photo-1602080926844-153f7ff5ce66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          }
          alt="donuts"
        />
        <div
          className="self-stretch w-full text-center py-5 bg-rose-600 text-white drop-shadow-xl"
          // style={{ backgroundColor: "#FF6666" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tempore provident quia nostrum iure minima suscipit nam totam
          similique perferendis, alias vel et? Tempora possimus rem soluta qui
          provident. Nihil.
        </div>
      </div> */}
      <Carousel />
    </div>
  );
};

const ThreeImagesCard = () => {
  const [, setCategory] = useCategory();
  const pictureCategories: [TMenuItemCategory, string][] = [
    ["Coffee & Drinks", "#FFEADD"],
    ["Donuts", "#FCAEAE"],
    ["Breakfast", "#5D3E2B"],
  ];

  const mapPictures = (
    category: [TMenuItemCategory, string],
    index: number
  ) => {
    return (
      <div
        className="relative bg-red-200 flex justify-center items-center md:aspect-square"
        style={{ backgroundColor: category[1] }}
        key={index}
      >
        <Link to={"/menu"} onClick={() => setCategory(category[0])}>
          {/* <img src={`/src/assets/DonutsTyme${category[0]}.png`} alt={category[0]} /> */}
          <img src={`/src/assets/DonutsTymeDonuts.png`} alt={category[0]} />
          <div className="absolute inset-0 hover:bg-black/70 opacity-0 hover:opacity-100  ease-in-out duration-300 h-full w-full flex flex-col items-center justify-center text-white os-font">
            <img
              src={`/src/assets/DonutsTyme${category[0]}Graphic.png`}
              alt=""
            />
            <span>{category[0]}</span>
          </div>
        </Link>
        <div className="absolute inset-0 h-full w-full flex items-end py-12 justify-center sm:hidden">
          <ButtonLink menuCategory={category[0]} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="flex items-center w-full justify-center py-7 text-4xl"
        style={{
          background: "linear-gradient(to bottom, #f4f4f4, rgb(255 228 230)",
          fontFamily: "Rampart One",
        }}
      >
        Check out our Menu!
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center bg-white">
        {pictureCategories.map(mapPictures)}
      </div>
    </>
  );
};
