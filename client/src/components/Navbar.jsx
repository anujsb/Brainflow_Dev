import React, { useState, useEffect, useRef } from 'react';


// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link as LinkScroll } from "react-scroll";

import { navLinks } from '../constants/constants';

import { logo } from "../assets/images";


const Navbar = () => {
    // const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [scrollActive, setScrollActive] = useState(false);



    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScrollActive(window.scrollY > 20);
        });
      }, []);

    return(
        <nav className={`${ scrollActive ? " shadow-lg pt-0  backdrop-blur-md" : " pt-3 "}
                sm:px-16 fixed top-0 w-full  z-30 `}>
            
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto "> 

                <Link
                  to='/'
                  className='flex items-center gap-2'
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                    }}
                >
                  <img src={logo} alt='logo' className='logo' />
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10 '>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                active === nav.title ? "text-white" : "text-white text-lg" } 
                                text-black hover:text-lg hover:underline text-[18px] cursor-pointer subpixel-antialiased font-light tracking-wide leading-loose`}
                            onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                    ))}
                </ul>


                

                {/* <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center" >
                    <Link 
                    
                    >
                    </Link>

                    <li><a className="text-black hover:text-white  px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative " href="/">Hero</a></li>
                    <li><a className="text-slate-300 hover:text-white px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relativw" href="/">Work</a></li>
                    <li><a className="text-slate-300 hover:text-white px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" href="/">Contact</a></li>
                </ul> */}

            </div>
        </nav>
        // </div>
    )
}


export default Navbar;