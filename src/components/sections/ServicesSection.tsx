import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Kitchen Designs",
      description:
        "Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years.",
    },
    {
      id: 2,
      title: "Kitchen Planner",
      description:
        "Plan and organize your kitchen layout with smart tools that help you maximize space and create efficient workflows tailored to your needs.",
    },
    {
      id: 3,
      title: "Home Check",
      description:
        "Ensure your home meets safety and design standards by running a comprehensive check on utilities, layout, and functionality.",
    },
    {
      id: 4,
      title: "Smart Care",
      description:
        "Maintain your kitchen and appliances with modern smart care solutions that extend durability, improve efficiency, and save costs.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-20  px-10 py-10 h-[90vh]">
      <div className="flex flex-col gap-6">
        <h4 className="font-bold uppercase text-sm text-stone-700">
          Our Services
        </h4>

        <h5 className="text-3xl text-stone-900">
          We provide all types of
          <br />
          <span className="underline">
            <a href="">modular kitchen</a>
          </span>{" "}
          <br />
          services
        </h5>
      </div>

      <div>
        <Accordion type="single" collapsible className="space-y-4 ">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <span className="text-stone-500 text-sm ">
                    0{service.id}.
                  </span>{" "}
                  <h3 className="text-stone-900 text-xl">
                    {""} {service.title}
                  </h3>
                </div>
                <AccordionTrigger className="cursor-pointer text-xl"></AccordionTrigger>
              </div>
              <AccordionContent>
                <p>{service.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesSection;
