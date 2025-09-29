import kitchen3d from "../../assets/images/kitchen-renolvation3D-nobg.png";
const TheDreamSection = () => {
  return (
    <div className="min-h-[80vh] bg-gray-200 flex flex-col items-center justify-center px-6 md:px-20 py-12">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        {/* Left Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-light leading-snug">
            Transforming{" "}
            <span className="font-semibold text-gray-800">
              space into dream
            </span>{" "}
            come true
          </h3>
        </div>

        {/* Middle Image */}
        <div className="md:flex-1 flex justify-center">
          <img
            src={kitchen3d}
            alt="kitchen-renovation-3d"
            className="h-[250px] md:h-[400px] object-contain "
          />
        </div>

        {/* Right Text */}
        <div className="md:flex-1 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero
            dolores dolorem, reiciendis doloremque ex doloribus ea, earum quo
            vitae consectetur et ut officia distinctio iste incidunt, aut
            eveniet asperiores.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <button className="bg-gray-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default TheDreamSection;
