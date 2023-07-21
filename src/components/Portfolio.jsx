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
import joelbot from "../assets/joelbot.png"
import wokka from "../assets/wokka2.png"

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
      id:3,
      src: uptime,
      description: "Components of a Mobile App made for University Students."
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
      id: 7,
      src: fish,
      description: "Computer Graphic Project of a Moving Fish."
    },
    {
      id:8,
      src: search,
      description: "Search Engine made with Solr, Vue and FastApi."
    },
    {
      id:9,
      src: residu,
      description: "Platform made for a Research Services Company."
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
    },
    {
      id:12,
      src: joelbot,
      description: "Twitter Bot made with Python."
    },
    {
      id:13,
      src: wokka,
      description: "Time Management App, Wokka, made in the context of a startup, Wan of a Kind."
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
          {portfolios.map(({ id, src, description }) => (
            <div key={id} className="flex flex-col items-center">
              {id === 5 ? (
                <a href="https://www.youtube.com/watch?v=CA3sB9_N2KE&t=2s">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 max-h-48 max-w-full"
                  />
                </a>
              ) : id === 12 ? (
                <a href="https://twitter.com/joelquotesbot">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 max-h-48 max-w-full"
                  />
                </a>
              ) : id === 13 ? (
                <a href="https://youtu.be/yKfJuab8DX4">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 max-h-48 max-w-full"
                  />
                </a>
              ):(
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 max-h-48 max-w-full"
                />
              )}

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

