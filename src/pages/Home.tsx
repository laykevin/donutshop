import { Banner } from "../components";

export const Home = () => {
  return (
    <>
      <Banner
        imgPath={
          "https://lh3.googleusercontent.com/p/AF1QipPmk0sjqUfdNcJRYp-lRNaLSe7wkH-OtqG_DmSg=s1360-w1360-h1020"
        }
        textContent={"Home Change Me!"}
      ></Banner>
      <HomeCard />
      <ThreeImagesCard />
      <HomeCard />
      <ThreeImagesCard />
    </>
  );
};

const HomeCard = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="flex flex-col items-center justify-center max-w-7xl m-auto py-5">
        <h1 className="text-center py-4 text-rose-800 max-w-2xl m-auto rounded-l ">
          <span
            className="shadow-2xl rounded-l shadow-rose-200 px-4 py-2"
            style={{
              background:
                "linear-gradient(to bottom, #f4f4f4, rgb(255 228 230)",
            }}
          >
            Donuts Tyme
          </span>
        </h1>
        <div className="w-2/4 text-center py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tempore provident quia nostrum iure minima suscipit nam totam
          similique perferendis, alias vel et? Tempora possimus rem soluta qui
          provident. Nihil.
        </div>
        <img
          className="w-1/4 aspect-sqaure rounded-md drop-shadow-xl"
          src={
            "https://www.allrecipes.com/thmb/cBPSZNvizIzy9X_NMIRvvqq6lIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-ddmfs-step-5-560-3x4-ad8a6d3f24e84ef388a17deca0fc3c8a.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
};

const ThreeImagesCard = () => {
  return (
    <div className="flex justify-center gap-5 bg-white py-5">
      <img src="/src/assets/DonutsTymeDonut.png" alt="" />
      <img src="/src/assets/DonutsTymeDonut.png" alt="" />
      <img src="/src/assets/DonutsTymeDonut.png" alt="" />
    </div>
  );
};
