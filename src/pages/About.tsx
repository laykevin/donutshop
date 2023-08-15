import { Banner, AboutCard, useCategory } from "../components";
import { Link } from "react-router-dom";

export const About = () => {
  const [category, setCategory] = useCategory();
  const ipsumText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut molestias voluptas temporibus omnis enim facilis perspiciatis quis doloremque, neque error voluptatum, expedita amet excepturi quisquam cum iste id quos minus.";
  return (
    <>
      <Banner
        imgPath={
          "https://lh3.googleusercontent.com/p/AF1QipPmk0sjqUfdNcJRYp-lRNaLSe7wkH-OtqG_DmSg=s1360-w1360-h1020"
        }
        textContent={"About Change Me!"}
      ></Banner>
      <div
        className="pt-4 relative"
        style={{
          backgroundColor: "#FFEADD",
        }}
      >
        <h1 className="text-center py-4 text-rose-800 max-w-2xl m-auto rounded-l ">
          <span
            className="shadow-2xl rounded-l shadow-rose-200 px-4 py-2"
            style={{
              background:
                "linear-gradient(to bottom, #f4f4f4, rgb(255 228 230)",
              fontFamily: "Amatic SC",
              fontWeight: "bold",
              fontSize: "6rem",
            }}
          >
            Our Mission
          </span>
        </h1>
        <div className="bowtie drop-shadow-xl"></div>
      </div>
      <AboutCard
        imgPath={"/src/assets/DonutsTymeAboutDonut.png"}
        title={"Fresh Daily!"}
        desc={ipsumText}
        rowReverse={false}
      >
        <Link to={"/menu"}>
          <button
            className="w-full p-4 ease-in-out duration-300 bg-red-100 hover:bg-red-200 rounded-full drop-shadow-xl text-white"
            style={{
              backgroundColor: "#FF6666",
              fontFamily: "Lato",
            }}
            onClick={() => setCategory("Donuts")}
          >
            Check out our Donuts!
          </button>
        </Link>
      </AboutCard>
      <AboutCard
        imgPath={
          "https://www.wecravecoffee.com/wp-content/uploads/2021/03/How-Many-Coffee-Beans-Per-Cup.jpg"
        }
        title={"Fresh Brewed Daily!"}
        desc={ipsumText}
        rowReverse={true}
      />
      <AboutCard
        imgPath={
          "https://media.nbcbayarea.com/2022/09/tlmd-mega-millions.jpg?quality=85&strip=all&resize=1200%2C675"
        }
        title={"Lucky Lotto!"}
        desc={ipsumText}
        rowReverse={false}
      ></AboutCard>
    </>
  );
};
