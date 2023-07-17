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
      className="flex max-w-6xl m-auto p-4 items-center"
      style={{ flexDirection: rowReverse ? "row-reverse" : "row" }}
    >
      <img className="w-2/4 aspect-video rounded-md" src={imgPath} alt="" />
      <div className="">
        <h3 className="text-center">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
