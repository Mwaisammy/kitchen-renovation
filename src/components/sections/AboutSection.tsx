import React from "react";
import aboutKitchen from "../../assets/images/kitchen-about.jpg";
import { CircleCheck } from "lucide-react";

const AboutSection = () => {
  const services = [
    {
      title: "Modular Kitchen",
      icon: CircleCheck,
    },
    {
      title: "Kitchen Planning",
      icon: CircleCheck,
    },
    {
      title: "Design Discussion",
      icon: CircleCheck,
    },
    {
      title: "Drafting Design",
      icon: CircleCheck,
    },
    {
      title: "Commercial Interior",
      icon: CircleCheck,
    },
    {
      title: "Kitchen Cabinet and more",
      icon: CircleCheck,
    },
  ];

  return (
    <div className="bg-[#f8f7f5] grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center mt-40 md:mt-0">
        <img
          src={aboutKitchen}
          alt="kitchen-renolvation"
          className="md:w-full h-[60%] md:h-[80%] w-[60%] object-contain"
        />
      </div>

      <div className="px-20">
        <div className="py-10 flex flex-col gap-[2.5rem]">
          <div className="flex gap-2 text-lg font-semibold uppercase">
            <span className="">____</span>
            <h3>About our workshop</h3>
          </div>

          <h4 className="text-4xl font-semibold">
            Discover a new look for our kitchen
          </h4>

          <p className="text-gray-600">
            Imagine a utopia where all of your wishes are granted and all of
            your desires are satisfied. From our magnificent private beach to
            our sophisticated palatial house, Bluebell offers unrivalled luxury.
            In this luxurious getaway, no expense has been spared. Our 8,000 Sq
            feet contemporary luxury estate can accommodate up to 20 guests.
          </p>

          <p className="font-semibold text-sm text-gray-800">
            You will receive special privileges and perks across many parts of
            our hotel and resort offers every time you stay with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ul key={service.title} className="flex items-center gap-4">
                <li>
                  <service.icon className="text-[#b1803b]" />
                </li>
                <li>{service.title}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
