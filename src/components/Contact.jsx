import React from "react";
import Talk from "../assets/talk.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full text-gray-500 mt-12 dark:bg-black dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>

          

        </div>

        

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/bc9da6f8-f622-49fe-b4f8-abcfeed27a2d"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-gray-500 dark:text-white focus:outline-none"
            ></textarea>

            <div className="container flex">
            <button className="text-white bg-gradient-to-b from-purple-500 to-purple-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
            <div className="image">
          <img
            src={Talk}
            alt="my profile"
            className=" w-20 h-20"
          />
          </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
