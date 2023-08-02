import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-red-200 grid md:grid-cols-6 gap-4 py-5 mx-auto">
      <div
        className="col-span-3 flex flex-col mx-auto text-xl"
        style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
      >
        Donuts Tyme
      </div>
      <div className="flex flex-col m-auto">
        <Link
          to={"./menu"}
          className="text-center text-xl"
          style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
        >
          Menu
        </Link>
        <Link to={"./menu"}>Donuts</Link>
        <Link to={"./menu"}>Coffee</Link>
        <Link to={"./menu"}>Breakfast</Link>
      </div>
      <div className=" col-span-2 flex flex-col mx-auto">
        <div
          className="text-center text-xl"
          style={{ fontFamily: "Oleo Script", fontSize: "2rem" }}
        >
          Located
        </div>
        <div>10320 Arlington Ave, Riverside, CA 92505</div>
      </div>
    </div>
  );
};
