const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "27+",
      title: "Architecture",
    },
    {
      id: 2,
      value: "78+",
      title: "Interior Designs",
    },
    {
      id: 1,
      value: "38+",
      title: "Modular Kitchens",
    },
    {
      id: 1,
      value: "98+",
      title: "Projects Done",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center p-20 mt-60 md:mt-10">
      {stats.map((item) => (
        <>
          <div className="flex flex-col items-center gap-2">
            <h1
              className="lg:text-7xl text-3xl md:text-5xl font-extrabold"
              style={{
                WebkitTextStroke: "1.5px #706f6fff",
                WebkitTextFillColor: "transparent", // ensure fill is transparent
                color: "transparent",
              }}
            >
              {item.value}
            </h1>
            <p className="text-gray-500">{item.title}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default StatsSection;
