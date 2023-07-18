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
    </>
  );
};

const HomeCard = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl m-auto">
      <h1>Donuts Tyme</h1>
      <div className="w-2/4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        tempore provident quia nostrum iure minima suscipit nam totam similique
        perferendis, alias vel et? Tempora possimus rem soluta qui provident.
        Nihil.
      </div>
      <img
        className="w-1/4 aspect-sqaure rounded-md drop-shadow-xl"
        src={
          "https://www.allrecipes.com/thmb/cBPSZNvizIzy9X_NMIRvvqq6lIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-ddmfs-step-5-560-3x4-ad8a6d3f24e84ef388a17deca0fc3c8a.jpg"
        }
        alt=""
      />
    </div>
  );
};
