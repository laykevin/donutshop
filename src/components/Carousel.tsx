import { useCallback, useEffect, useState } from "react";
import { GoDot, GoDotFill } from "react-icons/go";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const Carousel = () => {
  const [isShowing, setIsShowing] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1602080926844-153f7ff5ce66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bgColor: "red",
      title: "So Many Donuts!",
    },
    {
      src: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80",
      bgColor: "lightblue",
      title: "Fresh Brewed Coffee!",
    },
    {
      src: "https://images.unsplash.com/photo-1574694571857-6e28ed21dfe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bgColor: "orange",
      title: "Check Out Our Breakfast!",
    },
  ];

  const handleRightButton = useCallback(() => {
    setIsShowing((isShowing + 1) % images.length);
  }, [images.length, isShowing]);

  useEffect(() => {
    const intervalId = setInterval(handleRightButton, 10000);
    return () => clearInterval(intervalId);
  }, [isShowing, handleRightButton]);

  function handleLeftButton() {
    setIsShowing((isShowing - 1 + images.length) % images.length);
  }

  const mapCarousel = (carouselData: {
    src: string;
    bgColor: string;
    title: string;
  }) => {
    return (
      <>
        <img className="aspect-auto " src={carouselData.src} alt="donuts" />
        <div
          className="flex flex-col justify-around items-center self-stretch min-w-full py-5 bg-rose-600 text-white px-10"
          style={{ backgroundColor: carouselData.bgColor }}
        >
          <h1>{carouselData.title}</h1>
          <span style={{ fontFamily: "Ubuntu Condensed", fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            tempore provident quia nostrum iure minima suscipit nam totam
            similique perferendis, alias vel et? Tempora possimus rem soluta qui
            provident. Nihil.
          </span>
        </div>
      </>
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
        key={index}
        onClick={() => setIsShowing(index)}
        className="bg-transparent"
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
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div
          className={
            "flex ease-in-out carousel-animate -translate-x-ful min-w-full"
          }
          style={{ transform: `translateX(-${isShowing * 200}%)` }}
        >
          {images.map(mapCarousel)}
        </div>
      </div>
      <div className="flex justify-center items-center pt-2">
        <button onClick={handleLeftButton} className="bg-transparent">
          <FiChevronLeft size={20} />
        </button>
        {images.map(mapDots)}
        <button onClick={handleRightButton} className="bg-transparent">
          <FiChevronRight size={20} />
        </button>
      </div>
    </>
  );
};
