// import React from 'react';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import Scene from "./3d/ball";
// import asset from "../assets/images";
import Spline from '@splinetool/react-spline';



const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          'Websites.',
          'Chat bots.',
          'Automations.',
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
    <section className="max-w-screen-xl px-8 xl:px-16 mx-auto ">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1  ">
          <h1 className="text-5xl subpixel-antialiased font-light tracking-wide leading-loose ">
            title
          </h1>
          <h1 className="text-4xl subpixel-antialiased font-sans font-light tracking-wide leading-loose ">
          <p>
            I grow your <span ref={typedRef}></span>
          </p>
          </h1>
        </div>

        <div className="flex w-full flex-col justify-center items-start   mt-24">
          <div className='h-full w-full'>
          <Spline scene="https://prod.spline.design/KIClsoN4aLneStrR/scene.splinecode" />

          </div>
        </div>
      </div>
    </section>



    // <section className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto background-hero">
    //   <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
    //     <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
    //       <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal text-black">
    //         Hi, I'm Anuj
    //       </h1>
    //       <h1 className="text-4xl subpixel-antialiased font-sans font-light tracking-wide leading-loose text-black">
    //         <p>I build</p>
    //       </h1>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Hero;
