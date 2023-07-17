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
      }}
    >
      <div
        className={
          rowReverse
            ? "flex flex-col md:flex-row-reverse items-center max-w-6xl m-auto p-4"
            : "flex flex-col md:flex-row items-center max-w-6xl m-auto p-4"
        }
      >
        <img className="w-2/4 aspect-video rounded-md" src={imgPath} alt="" />
        <div className="">
          <h3 className="text-center">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
