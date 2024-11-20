import React, { useEffect, useState } from "react";
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      path: "/images/Carousel1.jpg",
      description: (
        <label>
          I'm{" "}
          <span
            className="relative text-6xl font-oswald
before:absolute before:inset-0 before:animate-typewriter before:bg-gradient-to-r 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Kyaw Ye Lwin
          </span>
          <br />
          <span>I have over </span>
          <span>7+</span>
          <span> years experience in software developement.</span>
        </label>
      ),
    },
    {
      path: "/images/My_Photo.jpg",
      description: (
        <label>
          Over 3 years of working experience in Software Development field as
          Project Leader.
          <br />
          Strong experience in planning, scheduling, budgeting, execution, and
          delivery of software and web project.
        </label>
      ),
    },
    {
      path: "/images/FOC.jpg",
      description: (
        <label>
          I'm extremely motivate person to share my knowledges.
          <br />
          So I have some online courses.
          <br /> Don't worry all are free.
        </label>
      ),
    },
    {
      path: "/images/Kingdom.jpg",
      description: <label>I have software development services also.</label>,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].path})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="rounded-2xl absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          {images[currentIndex].description}
        </h1>
      </div>
    </div>
  );
}

export default Carousel;
