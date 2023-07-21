import React from "react";
import Me from "../assets/about.png";
import { BsDownload } from "react-icons/bs";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-500 dark:bg-black dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full text-center">
        
        <div className="container flex gap-x-px">
          
          <div className="pb-8" >
          
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>  
                
        </div>
        <div className="image">
          <img
            src={Me}
            alt="my profile"
            className="ml-8 w-8 h-15"
          />
          </div>
        </div>

       

        



        <p className="text-xl mt-20">
          I'm Melissa and I'm an informatics engineer. I have worked with a lot of different technologies for all kinds of projects however I have grown an affinity for Software Enginnering and Backend Development. Currently, I'm doing my master's degree.
          I'm also a huge nerd and geek so I like to spend my free time reading comic books and playing video games. I have some athletic tendencies that manifest themselves as my obsession with swimming in any body of water. 
          
        </p>

        
        {/*Center this + add download*/}

        <a href="/resume.pdf" download={true}>
        <button className="text-white bg-gradient-to-b from-purple-500 to-purple-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Download my CV
              <span>
                <BsDownload size={25} className="ml-1" />
              </span>
              

          </button>
        </a>
       
      </div>
    </div>
  );
};

export default About;
