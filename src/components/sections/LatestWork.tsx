import kitchenCabinet1 from "../../assets/images/kitchen-cabinet-1.jpg";
import kitchenCabinet2 from "../../assets/images/kitchen-cabinet-5.jpg";
import kitchenCabinet3 from "../../assets/images/kitchen-cabinet-3.jpg";
import kitchenCabinet4 from "../../assets/images/kitchen-cabinet-4.jpg";

const LatestWork = () => {
  const kitchenCabinets = [
    {
      id: 1,
      image: kitchenCabinet1,
    },
    {
      id: 2,
      image: kitchenCabinet2,
    },
    {
      id: 3,
      image: kitchenCabinet3,
    },
    {
      id: 4,
      image: kitchenCabinet4,
    },
  ];

  return (
    <div className="bg-[#242b2e] px-10 py-18 h-[90vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-20 mb-10">
        <div>
          <h3 className="text-4xl text-white capitalize">
            Our latest kitchen designs
          </h3>
        </div>
        <div>
          <p className="text-white">
            The design of your kitchen varies from one layout to another. The
            shape of the kitchen also determines the design and space of
            cabinets, counter tops and accessories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 md:mt-20">
        {kitchenCabinets.map((item) => (
          <>
            <img
              src={item.image}
              className="w-[100%] h-[200px] md:h-[350px]  object-contain"
              alt="kitchen-cabinets"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
