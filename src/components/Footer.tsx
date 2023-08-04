import { Link } from "react-router-dom";
import { FooterProps, TMenuItemCategory } from "../lib";

export const Footer = ({ setCategory }: FooterProps) => {
  const categoryArray: Array<TMenuItemCategory> = [
    "All",
    "Donuts",
    "Coffee & Drinks",
    "Breakfast",
  ];

  const mapMenuLinks = (category: TMenuItemCategory, index: number) => {
    return (
      <>
        {category === "All" ? (
          <Link
            to={"./menu"}
            key={index}
            onClick={() => setCategory(category)}
            className="text-center text-xl"
            style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
          >
            Menu
          </Link>
        ) : (
          <Link to={"./menu"} key={index} onClick={() => setCategory(category)}>
            {category}
          </Link>
        )}
      </>
    );
  };

  return (
    <div className="bg-amber-950 text-white grid md:grid-cols-6 gap-4 py-5 mx-auto">
      <div
        className="col-span-3 flex flex-col mx-auto text-xl"
        style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
      >
        Donuts Tyme
      </div>
      <div className="flex flex-col m-auto">
        {categoryArray.map(mapMenuLinks)}
      </div>
      <div className=" col-span-2 flex flex-col mx-auto">
        <div
          className="text-center text-xl"
          style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
        >
          Located
        </div>
        <div>10320 Arlington Ave, Riverside, CA 92505</div>
        <div>☎️ (951) 351-1222</div>
      </div>
    </div>
  );
};
