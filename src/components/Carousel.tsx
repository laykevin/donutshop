import { useCallback, useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { TMenuItemCategory } from "../lib";
import { ButtonLink } from ".";

export const Carousel = () => {
  const [isShowing, setIsShowing] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images: {
    src: string;
    bgColor: string;
    title: string;
    buttonLink?: TMenuItemCategory;
  }[] = [
    {
      src: "https://images.unsplash.com/photo-1602080926844-153f7ff5ce66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bgColor: "red",
      title: "So Many Donuts!",
      buttonLink: "Donuts",
    },
    {
      src: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80",
      bgColor: "lightblue",
      title: "Fresh Brewed Coffee!",
      buttonLink: "Coffee & Drinks",
    },
    {
      src: "https://images.unsplash.com/photo-1574694571857-6e28ed21dfe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bgColor: "orange",
      title: "Check Out Our Breakfast!",
      buttonLink: "Breakfast",
    },
  ];

  const handleRightButton = useCallback(() => {
    if (isAnimating) return;
    setIsShowing((prev) => (prev + 1) % images.length);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(handleRightButton, 7000);
    return () => clearInterval(intervalId);
  }, [isShowing, handleRightButton]);

  function handleLeftButton() {
    setIsShowing((prev) => (prev - 1 + images.length) % images.length);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  }

  const mapCarousel = (
    carouselData: {
      src: string;
      bgColor: string;
      title: string;
      buttonLink?: TMenuItemCategory;
    },
    index: number
  ) => {
    return (
      <div className="flex flex-col lg:flex-row min-w-full" key={index}>
        <div className={`aspect-video ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
          <img src={carouselData.src} alt="donuts" />
        </div>
        <div
          className="flex flex-col justify-around items-center py-5 bg-rose-600 text-center text-white px-10"
          style={{ backgroundColor: carouselData.bgColor }}
        >
          <h1 style={{ fontFamily: "Francois One" }}>{carouselData.title}</h1>
          <span style={{ fontFamily: "Ubuntu Condensed", fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            tempore provident quia nostrum iure minima suscipit nam totam
            similique perferendis, alias vel et? Tempora possimus rem soluta qui
            provident. Nihil.
          </span>
          {carouselData.buttonLink && (
            <ButtonLink menuCategory={carouselData.buttonLink} />
          )}
        </div>
      </div>
    );
  };

  const mapDots = (
    carouselData: {
      src: string;
      bgColor: string;
      title: string;
    },
    index: number
  ) => {
    return (
      <button
        disabled={isAnimating}
        key={index}
        onClick={() => {
          setIsAnimating(true);
          setIsShowing(index);
          setTimeout(() => setIsAnimating(false), 700);
        }}
        className="bg-transparent hover:cursor-pointer"
      >
        {/* <img
            className="w-3/4"
            src={
              index === isShowing
                ? "/src/assets/carouselDotFilled.png"
                : "/src/assets/carouselDot.png"
            }
            alt="dot"
          /> */}
        {index === isShowing ? <GoDotFill size={30} /> : <GoDot size={30} />}
      </button>
    );
  };

  return (
    <>
      <div className="overflow-hidden">
        <div
          className={"flex ease-in-out carousel-animate w-full"}
          style={{ transform: `translateX(-${isShowing * 100}%)` }}
        >
          {images.map(mapCarousel)}
        </div>
      </div>
      <div
        className={`flex justify-center items-center pt-2

        }`}
      >
        <button
          onClick={handleLeftButton}
          className="bg-transparent cursor-pointer"
          disabled={isAnimating}
        >
          <FiChevronLeft size={20} />
        </button>
        {images.map(mapDots)}
        <button
          onClick={handleRightButton}
          className="bg-transparent cursor-pointer"
          disabled={isAnimating}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </>
  );
};
