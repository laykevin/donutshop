import { BannerProps } from "../lib";

export const Banner = ({ imgPath, textContent }: BannerProps) => {
  return (
    <div
      className="h-64 md:h-96 relative max-w-7xl mx-auto menu-fade"
      style={{ backgroundImage: `url(${imgPath})`, backgroundSize: "cover" }}
    >
      <div className="h-full bg-black opacity-50"></div>
      <span className="text-white opacity-100 text-4xl md:text-8x1 lg:text-9xl absolute inset-0 top-1/4 text-center">
        {textContent}
      </span>
    </div>
  );
};
