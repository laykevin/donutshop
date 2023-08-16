type TAboutCardProps = {
  imgPath: string;
  title: string;
  desc: string;
  rowReverse: boolean;
  children?: React.ReactNode;
};

export const AboutCard = ({
  imgPath,
  title,
  desc,
  rowReverse,
  children,
}: TAboutCardProps) => {
  return (
    <div
      style={{
        backgroundColor: rowReverse ? "#ffffff" : "#FFEADD",
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
          <h3
            className="text-center text-3xl py-2"
            style={{ color: "#FF6666" }}
          >
            {title}
          </h3>
          <p
            className="text-center"
            style={{ fontFamily: "Handlee", fontSize: "1.5rem" }}
          >
            {desc}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};
