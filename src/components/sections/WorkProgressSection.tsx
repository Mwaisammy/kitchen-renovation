import { Brush, Handshake, Rows2, Users } from "lucide-react";

const WorkProgressSection = () => {
  const workProgress = [
    {
      id: 1,
      title: "Meet customers",
      icon: Handshake,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae tempore quibusdam nemo porro iust",
    },
    {
      id: 2,
      title: "Meeting on the table",
      icon: Users,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae tempore quibusdam nemo porro iust",
    },
    {
      id: 3,
      title: "Drafting Design",
      icon: Brush,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae tempore quibusdam nemo porro iust",
    },
    {
      id: 4,
      title: "Implementation",
      icon: Rows2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae tempore quibusdam nemo porro iust",
    },
  ];

  return (
    <div className="p-20 flex flex-col items-center gap-5">
      <h3 className="uppercase flex items-center text-center gap-2 text-xl  font-semibold">
        <span className="border-t border-stone-900 border-2 w-5"></span>
        how we do work{" "}
        <span className="border-t border-stone-900 border-2 w-5"></span>
      </h3>

      <h4 className="text-4xl text-center font-semibold">Our Work Progress</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        {workProgress.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center bg-gray-100 rounded-full p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <item.icon className="w-12 h-12 text-amber-500" />
              <h2 className="absolute -bottom-4 -right-4 bg-gray-700 text-white text-sm font-semibold rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                {item.id}
              </h2>
            </div>

            <h3 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProgressSection;
