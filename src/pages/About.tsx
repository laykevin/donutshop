import { Banner, AboutCard, ButtonLink } from "../components";

export const About = () => {
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
        <ButtonLink menuCategory="Donuts" />
      </AboutCard>
      <AboutCard
        imgPath={
          "https://www.wecravecoffee.com/wp-content/uploads/2021/03/How-Many-Coffee-Beans-Per-Cup.jpg"
        }
        title={"Fresh Brewed Daily!"}
        desc={ipsumText}
        rowReverse={true}
      >
        <ButtonLink menuCategory={"Coffee & Drinks"} />
      </AboutCard>
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
