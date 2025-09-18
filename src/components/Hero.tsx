import React from 'react'
import IconsStyle from '../icons/IconsStyle'

const Hero = () => {
  return (
   <section
      className="relative w-full  
                 flex flex-col md:flex-row items-center justify-between
                 px-8 lg:px-20 
                 mt-12 md:mt-20 lg:mt-28 
                 py-16 md:py-24 lg:py-32"
    >
      {/* Social Icons - fixed on the left */}
      <div className="hidden md:flex flex-col items-center space-y-6 absolute  top-1/2 -translate-y-1/2">
        <IconsStyle />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-8 max-w-xl text-center md:text-left lg:ml-48 z-10">
        <p className="text-gray-400 tracking-widest text-sm md:text-base">
          -- Hello
        </p>

        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          I’m <span className="text-amber-500">Mouad Elbaz</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl">
          A full stack developer based in Morocco.
        </p>

        <button
          className="w-fit px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold shadow-md 
                     hover:bg-amber-500 hover:shadow-lg transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        >
          Learn More
        </button>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-12 md:mt-0">
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