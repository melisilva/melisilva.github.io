import React from "react";
import simonvs from "../assets/simonvs.png";
import tetris from "../assets/tetris.png";
import fish from "../assets/fish.gif";
import mancala from "../assets/mancala.png";
import uptime from "../assets/uptime2.png";
import noodle from "../assets/noodle.png";
import myhealthdiary from "../assets/myhealthdiary.png"
import search from "../assets/search.png"
import residu from "../assets/residu.png"
import twitter from "../assets/twitter.png"
import checkers from "../assets/checkers.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: simonvs,
      description: "Multiplayer game based on Simon Says. Made in C for the Minix OS."
    },
    {
      id: 2,
      src: tetris,
      description: "Multiplayer Tetris with other game modes."
    },
    {
      id: 3,
      src: fish,
      description: "Computer Graphic Project of a Moving Fish."
    },
    {
      id: 4,
      src: mancala,
      description: "Mancala Board Game with Local or Online Multiplayer."
    },
    {
      id: 5,
      src: noodle,
      description: "Social Media Website made with Laravel."
    },
    {
      id: 6,
      src: myhealthdiary,
      description: "Website and Mobile App made for an Hospital."
    },
    {
      id:7,
      src: uptime,
      description: "Components of a Mobile App made for University Students."
    },
    {
      id:8,
      src: search,
      description: "Search Engine made with Solr, Vue and FastApi."
    },
    {
      id:9,
      src: residu,
      description: "Website made for BUILTColab."
    },
    {
      id:10,
      src: twitter,
      description: "Descentralized Twitter made with FastApi, Vue and Kademlia."
    },
    {
      id:11,
      src: checkers,
      description: "Computer Graphic Project of a Checkers Game."
    }

  ];

  return (
    <div
      name="portfolio"
      className="w-full text-gray-600 h-full dark:bg-black dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Here's some of the work I have done:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, description}) => (
            <div key={id}>
              {id==5? <a href="https://www.youtube.com/watch?v=CA3sB9_N2KE&t=2s">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              </a>:
              <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />}
            

            

              
              <div className="flex items-center justify-center">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

{/*
Portfolio
No photo:
IART Working with Supervised Learning to deal with a data set - the data pertains to music statistics obtained from Spotify
RC Serial Port File Transfer App
AEDA bookshop
BDAD data base
SOPE client server
PFL - prolog game
CAL- parking lot
IART- python game + machine learning


Photo:
Tetris
Noodle
Fish
Simon VS
My Health Diary

Need to take photo mancala*/}
