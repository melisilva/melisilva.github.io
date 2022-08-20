import React from "react";
import HeroImage from "../assets/holo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Mail from "../assets/envelope.svg"


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full dark:bg-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-700 dark:text-white">
            Holo. I'm Melissa
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
           An Informatics and Computer Engineer 
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-purple-700 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="mt-10 flex flex-row cursor-pointer">
          <a href="https://github.com/melisilva">
          <img src={Github} alt="git"
          className="rounded-2xl  ml-2 w-7 hover:scale-105"/>
          </a>
          <a href="https://www.linkedin.com/in/melissa-silva-661521248/">
          <img src={Linkedin} alt="linkedin"
          className="rounded-2xl  ml-2 w-7 hover:scale-105" />
          </a>
          <a href="mailto:melissa.silva2001.ms@gmail.com">
          <img src={Mail} alt="mail"
          className="rounded-2xl ml-2 w-7 hover:scale-105" />
          </a>
          </div>

        </div>

        

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3"
          />
        </div>
        

    </div>

      </div>
      

   

    
  );
};

export default Home;