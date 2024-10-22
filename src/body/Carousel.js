import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    {path:'/images/person.jpg',description :"Over 9 years of working experience in Software Development field as Project Leader. Strong experience in planning, scheduling, budgeting, execution, and delivery of software and web project."},
    {path:'/images/person.jpg',description :"Good experience in developing reports on project progress, testing the product prototypes, providing quality assurance tests on the final products. Have experience in determining and overseeing consistent testing, evaluation, and troubleshooting of all products in all stages of completion"},
    {path:'/images/person.jpg',description :"Report to Project Manager and supervised the software development team"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

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