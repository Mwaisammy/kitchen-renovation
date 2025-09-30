import kitchenRenovation from "../../assets/images/kitchen-cabinet-4.jpg";
import { Button } from "../ui/button";

const VideoSection = () => {
  return (
    <div
      className="relative min-h-[70vh] bg-amber-300"
      style={{
        backgroundImage: `url(${kitchenRenovation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-700/90" />

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-4 text-center lg:text-left">
          <h3 className="text-white font-semibold text-3xl lg:text-4xl leading-snug">
            Our core values allow us to stay on track and{" "}
            <span className="text-white underline">innovate in design.</span>
          </h3>
          <h4 className="text-white underline font-semibold text-lg">
            Feel good from design to installation.
          </h4>

          <p className="text-white text-base">
            We are following protocols to ensure safety of our staff.
          </p>
          <div className="mt-4">
            <Button className="bg-gray-400 text-black hover:text-black hover:bg-gray-700 cursor-pointer">
              Check out More Videos
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/isu7eUKyHbA?si=wQwHjILnAGj-5Evz"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-xs lg:text-sm text-white italic mt-4 text-center lg:text-left">
            Copyright: What the flip
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
