type TAboutCardProps = {
  imgPath: string;
  title: string;
  desc: string;
  rowReverse: boolean;
};

export const AboutCard = ({
  imgPath,
  title,
  desc,
  rowReverse,
}: TAboutCardProps) => {
  return (
    <div
      style={{
        backgroundColor: rowReverse ? "#ffffff" : "#f4f4f4",
        padding: "2rem 0",
      }}
    >
      <div
        className={
          rowReverse
            ? "flex flex-col md:flex-row-reverse items-center md:items-start max-w-6xl m-auto p-5 gap-12"
            : "flex flex-col md:flex-row items-center md:items-start max-w-6xl m-auto p-5 gap-12"
        }
      >
        <img
          className="w-3/4 md:w-2/5 aspect-sqaure rounded-md drop-shadow-xl"
          src={imgPath}
          alt=""
        />
        <div className="flex flex-col justify-around items-center self-stretch">
          <h3 className="text-center text-3xl py-2 text-rose-500">{title}</h3>
          <p className="text-center">{desc}</p>
          <button className="w-1/3 py-4 ease-in-out duration-300 bg-red-100 hover:bg-red-200 rounded drop-shadow-xl">
            Check out our Donuts!
          </button>
        </div>
      </div>
    </div>
  );
};
