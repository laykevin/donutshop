import { Link } from "react-router-dom";
import { ECategoryToParams, FooterProps, TMenuItemCategory } from "../lib";

export const Footer = () => {
  const categoryArray: Array<TMenuItemCategory> = [
    "All",
    "Donuts",
    "Coffee & Drinks",
    "Breakfast",
  ];

  const mapMenuLinks = (category: TMenuItemCategory, index: number) => {
    return (
      <div key={index}>
        {category === "All" ? (
          <Link
            to={"./menu"}
            className="text-center text-xl"
            style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
          >
            Menu
          </Link>
        ) : (
          <Link to={`./menu/?sort=${ECategoryToParams[category]}`}>
            {category}
          </Link>
        )}
      </div>
    );
  };

  return (
    <footer
      className="bg-amber-950 text-white grid grid-cols-2 md:grid-cols-6 gap-4 py-10 mx-auto"
      style={{ backgroundColor: "#48250F" }}
    >
      <div
        className="col-span-3 flex flex-col mx-auto text-xl"
        style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
      >
        Donuts Tyme
      </div>
      <div className="flex flex-col m-auto">
        {categoryArray.map(mapMenuLinks)}
      </div>
      <div className=" md:col-span-2 flex flex-col mx-auto">
        <div
          className="text-center text-xl"
          style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
        >
          Located
        </div>
        <a href="https://goo.gl/maps/JRQGtAFHyJjEAFai6" target="_blank">
          📍 10320 Arlington Ave, Riverside, CA 92505
        </a>
        <div>☎️ (951) 351-1222</div>
      </div>
    </footer>
  );
};
