import modernKitchen1 from "../../assets/images/modern-kitchen1.jpg";
import modernKitchen2 from "../../assets/images/modern-kitchen2.jpg";
import modernKitchen3 from "../../assets/images/modern-kitchen3.jpg";
import modernKitchen4 from "../../assets/images/modern-kitchen4.jpg";
import { Separator } from "../ui/separator";
const BlogsSection = () => {
  const blogData = [
    {
      id: 1,
      image: modernKitchen1,
      sender: "Admin",
      date: "August 13, 2025",
      description: "How we can fix any problem in the kitchen in 5 minutes",
    },
    {
      id: 2,
      image: modernKitchen2,
      sender: "Admin",
      date: "August 15, 2025",
      description: "Transforming spaces into dream come true",
    },
    {
      id: 3,
      image: modernKitchen3,
      sender: "Admin",
      date: "August 20, 2025",
      description: "Our core value allow us to stay on track and innovate",
    },
    {
      id: 4,
      image: modernKitchen4,
      sender: "Admin",
      date: "August 30, 2025",
      description:
        "We are committed to providing exceptional customer service and ensuring your satisfaction",
    },
  ];
  return (
    <div id="news" className="flex flex-col items-center gap-4 p-10">
      <div className="flex flex-col items-center">
        <h1 className="uppercase  font-bold tracking-wide">Our Blogs</h1>
        <h4 className="text-gray-900 text-4xl">Recent News & Articles</h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {blogData.map((item) => (
          <div key={item.id} className="hover:scale-102">
            <img
              src={item.image}
              className="w-full h-[200px] md:h-[300px] object-contain"
              alt={`blog-${item.id}`}
            />

            <div className="flex items-center h-5 gap-2">
              <h2 className="text-sm font-bold text-gray-900">{item.sender}</h2>

              <Separator
                orientation="vertical"
                className="bg-gray-700 w-[1px] h-4 "
              />

              <h2 className="text-sm text-gray-500 uppercase font-bold">
                {item.date}
              </h2>
            </div>
            <p className="text-sm font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
