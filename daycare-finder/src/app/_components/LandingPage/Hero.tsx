import React from "react";
import SearchBar from "../SearchBar";

const Hero = () => {
  // Replace 'your-image-url' with the actual URL of your background image
  const imageUrl = "/assets/hero.jpg";

  return (
    <div className="relative flex justify-center items-center h-108 bg-green-100">
      {/* Overlay with gradient: clear at the top to black at the bottom */}

      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 0%)",
        }}
      ></div>

      {/* Ensure the SearchBar is positioned above the overlay */}
      <div className="z-10">
        <SearchBar />
      </div>

      {/* Background image using inline style for dynamic URL */}
    </div>
  );
};

export default Hero;
