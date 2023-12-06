// import React from 'react';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';



const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          'Websites.',
          'Chat bots.',
          'Automations.',
          '90 ml pegs'
        ],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 50, // backspacing speed in milliseconds
        loop: true, // loop the animation
      };

      const typed = new Typed(typedRef.current, options);

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    // <section className="h-full absolute insert-0 z-[-1] my-auto min-h-screen max-w-screen-xl mx-auto items-center top-0 w-full background-hero">
    //   <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-60 sm:py-16">
    //     <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6">
    //       <h1 className="text-5xl subpixel-antialiased font-light tracking-wide leading-loose text-black">
    //         title
    //       </h1>
    //       <h1 className="text-4xl subpixel-antialiased font-sans font-light tracking-wide leading-loose text-black">
    //       <p>
    //         I grow your <span ref={typedRef}></span>
    //       </p>
    //       </h1>
    //     </div>
    //   </div>
    // </section>
    <section className="absolute z-10 my-auto min-h-screen max-w-screen-xl mx-auto items-center top-0 w-full background-hero">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-60 sm:py-16">
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-black">
            Hi, I'm Anuj
          </h1>
          <h1 className="text-4xl subpixel-antialiased font-sans font-light tracking-wide leading-loose text-black">
            <p>I build</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
