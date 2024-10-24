import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    {path:'/images/My_Photo.jpg',description :<label>I'm <span className='text-6xl font-oswald'>Kyaw Ye Lwin</span><br/><span>I have over </span><span>7+</span><span>years experience in software developement.</span></label>},
    {path:'/images/My_Photo.jpg',description :"Over 3 years of working experience in Software Development field as Project Leader. Strong experience in planning, scheduling, budgeting, execution, and delivery of software and web project."},
    {path:'/images/My_Photo.jpg',description :"I'm extremely motivate person to share my knowledges. So I have some online courses. Don't worry all is free."},
    {path:'/images/My_Photo.jpg',description :"I give software development service also"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative overflow-hidden ml-10">
        <div className='flex transition-transform duration-700' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image,index) =>(
                <div key={index} className='flex-shrink-0 w-full columns-2'>
                    <div>
                        <img src={image.path}/>
                    </div>
                    <div className='flex bg-amber-600 h-full items-center justify-center'>
                        <label className='flex font-bla text-justify leading-10 indent-8 justify-self-center justify-center w-3/4 text-slate-100 '>{image.description}</label>
                    </div>
                </div>
            ))}
        </div>
  </div>
  );
};

export default Carousel;