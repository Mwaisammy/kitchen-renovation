import React from "react";
import kitchenRenovation from "../../assets/images/kitchen interior.jpg";
const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[90vh]">
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
          <button className="bg-[#3c5c55] text-white px-6 py-3 cursor-pointer">
            Discover More
          </button>
        </div>
      </div>

      <div>
        <img
          src={kitchenRenovation}
          className="w-full h-[90%] object-cover"
          alt="kitchen-renolvation"
        />
      </div>
    </div>
  );
};

export default HeroSection;
