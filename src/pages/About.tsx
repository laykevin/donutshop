import { Banner, AboutCard } from "../components";

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
      <AboutCard
        imgPath={
          "https://www.allrecipes.com/thmb/cBPSZNvizIzy9X_NMIRvvqq6lIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-ddmfs-step-5-560-3x4-ad8a6d3f24e84ef388a17deca0fc3c8a.jpg"
        }
        title={"Fresh Daily!"}
        desc={ipsumText}
        rowReverse={false}
      />
      <AboutCard
        imgPath={
          "https://www.allrecipes.com/thmb/cBPSZNvizIzy9X_NMIRvvqq6lIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45921-crispy-and-creamy-doughnuts-ddmfs-step-5-560-3x4-ad8a6d3f24e84ef388a17deca0fc3c8a.jpg"
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
      />
    </>
  );
};
