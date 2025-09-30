import kitchenRenovation1 from "../../assets/images/kitchen-interior1.jpg";
import kitchenRenovation2 from "../../assets/images/kitchen-interior2.jpg";
import kitchenRenovation3 from "../../assets/images/kitchen-interior3.jpg";
import kitchenRenovation4 from "../../assets/images/kitchen-interior4.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const HeroSection = () => {
  const kitchenRenovations = [
    {
      id: 1,
      image: kitchenRenovation1,
    },
    {
      id: 2,
      image: kitchenRenovation2,
    },
    {
      id: 3,
      image: kitchenRenovation3,
    },
    {
      id: 4,
      image: kitchenRenovation4,
    },
  ];
  return (
    <div id="home" className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
      <div className="bg-[#1d2b28] px-10 py-14">
        <h3 className="text-white text-4xl py-4">
          Design your kitchen with our experts
        </h3>
        <p className="text-white">
          Interior design consultancy firm that brings sensitivity to the design
          top restaurants, hotels, offices & homes around the world. We stand
          for quality, safety and credibility
        </p>

        <div className="mt-20">
          <a
            href="#projects"
            className="bg-[#3c5c55] hover:bg-[#2e4641] text-white px-6 py-3 cursor-pointer inline-block"
          >
            Discover More
          </a>
        </div>
      </div>

      <div className=" p-10 md:p-0">
        <Carousel className="relative">
          <CarouselContent>
            {kitchenRenovations.map((item) => (
              <CarouselItem key={item.id}>
                <img
                  src={item.image}
                  className="w-full lg:h-[84vh] h-[400px]  object-cover"
                  alt="kitchen-renolvation"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className=" absolute -bottom-4 left-16 flex items-center">
            <CarouselPrevious className="rounded-none m-0 bg-yellow-700 text-white cursor-pointer hover:bg-yellow-800 hover:text-white " />
            <CarouselNext className="rounded-none m-0 bg-yellow-700  text-white cursor-pointer hover:bg-yellow-800 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
