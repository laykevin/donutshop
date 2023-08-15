import { Link } from "react-router-dom";
import { useCategory } from ".";
import { TMenuItemCategory } from "../lib";

interface ButtonLinkProps {
  menuCategory: TMenuItemCategory;
}

export const ButtonLink = ({ menuCategory }: ButtonLinkProps) => {
  const [, setCategory] = useCategory();
  return (
    <Link to={"/menu"}>
      <button
        className="w-full px-5 py-3 ease-in-out duration-300 bg-red-100 hover:bg-red-200 rounded-full drop-shadow-xl text-white"
        style={{
          backgroundColor: "#FF6666",
          fontFamily: "Bayon",
          fontSize: "1.5rem",
        }}
        onClick={() => setCategory(menuCategory)}
      >
        Check out our Donuts!
      </button>
    </Link>
  );
};
