import React from "react";
import { Button } from "../ui/button";
import kitchenRenovation from "../../assets/images/kitchen-cabinet-4.jpg";

const VideoSection = () => {
  return (
    <div
      className="relative h-[70vh]"
      style={{
        backgroundImage: ` url(${kitchenRenovation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-700 opacity-90" />

      <div className="absolute z-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col p-20 gap-4">
          <h3 className="text-white font-semibold text-4xl">
            Our core values allow us to stay on track and{" "}
            <span className="text-white underline">innovate in design.</span>
          </h3>
          <h4 className="text-white underline font-semibold">
            Feel good from design to installation.
          </h4>

          <p className="text-white">
            We are following protocols to ensure safety of our staff.
          </p>
          <div>
            <Button className="bg-gray-400 text-black hover:text-black hover:bg-gray-700 cursor-pointer">
              Check out More Videos
            </Button>
          </div>
        </div>

        <div className="flex flex-col  justify-center p-6">
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/isu7eUKyHbA?si=wQwHjILnAGj-5Evz"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="text-sm text-white italic mt-4">
            Copyright: What the flip{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
