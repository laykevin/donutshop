import { Banner, ButtonLink, Carousel, useCategory } from "../components";
import { Link } from "react-router-dom";
import { ECategoryToParams, TMenuItemCategory } from "../lib";

export const Home = () => {
  return (
    <>
      <Banner
        imgPath={
          "https://lh3.googleusercontent.com/p/AF1QipPmk0sjqUfdNcJRYp-lRNaLSe7wkH-OtqG_DmSg=s1360-w1360-h1020"
        }
        textContent={"Home Change Me!"}
      ></Banner>
      {/* <GoogleMapsSlide /> */}
      <HomeCard />
      <ThreeImagesCard />
      <GoogleMapsSlide />
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
        <Link to={`/menu?sort=${ECategoryToParams[category[0]]}`}>
          {/* <img src={`/src/assets/DonutsTyme${category[0]}.png`} alt={category[0]} /> */}
          <img src={`/src/assets/DonutsTymeDonuts.png`} alt={category[0]} />
          <div className="absolute inset-0 hover:bg-black/80 opacity-0 hover:opacity-100  ease-in-out duration-300 h-full w-full flex flex-col items-center justify-center text-white os-font">
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
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center bg-white gap-1">
        {pictureCategories.map(mapPictures)}
      </div>
    </>
  );
};

const GoogleMapsSlide = () => {
  return (
    <div className="flex flex-col lg:flex-row min-w-full md:py-1 md:gap-1">
      <div className="aspect-video w-full pointer-events-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sus!4v1692373970626!5m2!1sen!2sus!6m8!1m7!1sfUSRFDlwAjFDfv1XA0Nx6g!2m2!1d33.94633874276882!2d-117.4785328236543!3f139.42969476620226!4f4.471584433928783!5f1.1924812503605782"
          width={"100%"}
          height={"100%"}
          style={{ border: "0" }}
          // allowfullscreen={false}
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="flex flex-col justify-around items-center py-5 bg-rose-600 text-center text-white w-full"
        style={{ backgroundColor: "green" }}
      >
        <h1 style={{ fontFamily: "Francois One" }}>Arlington & Tyler!</h1>
        <div className="flex justify-between">
          <div className="flex flex-col justify-around">
            <span
              style={{ fontFamily: "Ubuntu Condensed", fontSize: "1.5rem" }}
            >
              10320 Arlington Ave, Riverside, CA 92505
            </span>
            <span
              style={{ fontFamily: "Ubuntu Condensed", fontSize: "1.5rem" }}
            >
              (951) 351-1222
            </span>
          </div>

          {/* <Link to="https://goo.gl/maps/JRQGtAFHyJjEAFai6" target="_blank">
            <button
              className="w-full px-5 py-3 ease-in-out duration-300 bg-red-100 hover:bg-red-200 rounded-full drop-shadow-xl text-white"
              style={{
                backgroundColor: "#FF6666",
                fontFamily: "Bayon",
                fontSize: "1.5rem",
              }}
            >
              Get Directions!
            </button>
          </Link> */}
        </div>
        <div className="aspect-video w-full">
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.4510835432618!2d-117.47903823039384!3d33.94616029832479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb6c017a19c33%3A0xbc73018988623ad8!2sDonuts%20Tyme!5e0!3m2!1sen!2sus!4v1692391639312!5m2!1sen!2sus"
            width={"100%"}
            height={"100%"}
            // style={{ border: "0" }}
            // allowfullscreen={false}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* {carouselData.buttonLink && (
            <ButtonLink menuCategory={carouselData.buttonLink} />
          )} */}
      </div>
    </div>
  );
};
