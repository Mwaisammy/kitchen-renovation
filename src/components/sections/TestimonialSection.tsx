import client1 from "../../assets/images/joy-kimani.jpg";
import client2 from "../../assets/images/michael-kimani.jpg";
import client3 from "../../assets/images/mark-odhiambo.jpg";
import client4 from "../../assets/images/imannuel-sang.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Kimani",
      imageUrl: client1,
      description:
        "The renovation completely transformed my kitchen. The team paid attention to every detail and delivered a modern, functional space that my family loves. Cooking has never been this enjoyable.",
    },
    {
      id: 2,
      name: "Joy Ndungu",
      imageUrl: client2,
      description:
        "I am so impressed with the professionalism and quality of work. My old kitchen felt cramped, but now it’s spacious, stylish, and exactly how I imagined it. They truly brought my vision to life.",
    },
    {
      id: 3,
      name: "Mark Odhiambo",
      imageUrl: client3,
      description:
        "From start to finish, the process was seamless. The design team suggested great ideas, and the end result exceeded my expectations. Friends keep complimenting how beautiful my new kitchen looks.",
    },
    {
      id: 4,
      name: "Immanuel Sang",
      imageUrl: client4,
      description:
        "The renovation was worth every coin. Not only does my kitchen look elegant, but it’s also more practical for everyday use. I highly recommend their services to anyone considering a remodel.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <Carousel className="relative">
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.id}>
                <div className="flex flex-col items-center text-center px-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-28 h-28 rounded-full object-cover border-2 border-gray-400 shadow-lg"
                    />
                    <Quote className="absolute -bottom-3 -right-3 size-8 text-white bg-gray-400 rounded-full p-1 shadow-md" />
                  </div>

                  {/* Testimonial */}
                  <p className="mt-6 text-gray-700 italic leading-relaxed">
                    “{item.description}”
                  </p>

                  {/* Name */}
                  <p className="mt-4 text-lg font-semibold text-amber-600">
                    {item.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows */}
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
