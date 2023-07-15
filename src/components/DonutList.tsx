interface IDonut {
  name: string;
  description: string;
  img: string;
}

type DonutProps = { donut: { name: string; description: string; img: string } };

export const DonutList: React.FC = () => {
  const tempList: IDonut[] = [
    {
      name: "Glazed Donut",
      description:
        "Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze",
      img: "https://assets.epicurious.com/photos/54b0226d766062b20344580a/4:3/w_775,h_581,c_limit/51160200_glazed-doughnuts_1x1.jpg",
    },
    {
      name: "Chocolate Donut",
      description:
        "Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze ",
      img: "https://assets.epicurious.com/photos/54b0226d766062b20344580a/4:3/w_775,h_581,c_limit/51160200_glazed-doughnuts_1x1.jpg",
    },
    {
      name: "Glazed Donut",
      description:
        "Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze",
      img: "https://assets.epicurious.com/photos/54b0226d766062b20344580a/4:3/w_775,h_581,c_limit/51160200_glazed-doughnuts_1x1.jpg",
    },
    {
      name: "Chocolate Donut",
      description:
        "Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze Fluffy donut with glaze ",
      img: "https://assets.epicurious.com/photos/54b0226d766062b20344580a/4:3/w_775,h_581,c_limit/51160200_glazed-doughnuts_1x1.jpg",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {tempList.map((donut: IDonut) => (
        <DonutCard donut={donut}></DonutCard>
      ))}
    </div>
  );
};

const DonutCard = ({ donut }: DonutProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full md:w-1/2">
      <img
        className="w-1/5 aspect-square p-2.5"
        style={{ minWidth: "80px" }}
        src={donut.img}
        alt={donut.name}
      />
      <div className="pl-2.5 text-center md:text-left">
        <p className="font-black">{donut.name}</p>
        <p>{donut.description}</p>
      </div>
    </div>
  );
};
