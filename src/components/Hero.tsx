import React, { useEffect, useRef  } from 'react';
import { gsap } from 'gsap';
import IconsStyle from '../icons/IconsStyle';

const Hero = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Timeline for text
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
    });

    tl.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
      )
      .fromTo(
        paraRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.5"
      );

    // Separate timeline for image
    const tlImg = gsap.timeline({
      defaults: { ease: "power3.out", duration: 5 },
    });

    tlImg.fromTo(
      imgRef.current,
      { x: 280, opacity: 0 },
      { x: 0, opacity: 1 }
    );
  }, []);


  return (
   <section
      className="relative w-full  
                 flex flex-col md:flex-row items-center justify-between
                 px-8 lg:px-20 
                 mt-12 md:mt-20 lg:mt-28 
                 py-16 md:py-24 lg:py-32"
    >
      {/* Social Icons - fixed on the left */}
      <div 
        
        className="hidden md:flex flex-col items-center space-y-6 absolute  top-1/2 -translate-y-1/2">
        <IconsStyle />
      </div>

      {/* Text Section */}
      <div 
        className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-xl text-center md:text-left lg:ml-48 z-10"
        ref={textRef}
        >
        <p className="text-gray-400 tracking-widest text-sm md:text-base" ref={textRef}>
          -- Hello
        </p>

        <h1 ref={headingRef} className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          I’m <span className="text-amber-500">Mouad Elbaz</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl" ref={paraRef}>
          A full stack developer based in Morocco.
        </p>

        <button
          ref={buttonRef}
          className="w-fit px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold shadow-md 
                     hover:bg-amber-500 hover:shadow-lg transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <div ref={imgRef} className="flex justify-center md:justify-end w-full md:w-1/2 mt-12 md:mt-0">
        <img
          src="/icons/heroIcon.png"
          alt="Hero illustration"
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
