import React from "react";

const ProjectsCard = ({ info }) => {
  return (
    <>
      <div className=" mb-10 flex flex-col justify-between p-8 rounded-3xl m-10 gap-4 min-h-[30rem] w-[17rem] sm:w-[30rem] border border-gray-500 shadow-[1.2px_0px_10px_0px_#f687b3] bg-gradient-to-r from-zinc-900 to-fuchsia-900 hover:scale-105 duration-200 scroll-smooth">
        <div className="h-[12rem] sm:h-[15rem] w-full border border-gray-400 overflow-hidden rounded-xl">
          <img
            src={`images/${info.img}.png`}
            alt="game"
            className=" h-full w-full"
          />
        </div>
        <h1 className="text-[1.5rem] sm:text-[2rem] text-gray-400">
          {info.title}
        </h1>
        <div className="flex flex-wrap gap-2 -mt-1 mb-10">
          {info.tools.map((items) => (
            <div className="text-pink-600 border border-pink-700 text-[0.9rem] sm:text-[1.1rem] rounded-xl px-4">
              {items}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 sm:justify-between sm:flex-row">
          <a href={`${info.github}`} target="_blank">
            <button className=" w-[10rem] py-1 sm:py-2 text-[1.2rem] sm:text-[1.5rem] text-gray-400 font-semibold rounded-2xl bg-purple-700 hover:bg-purple-900 border-1 border-gray-400">
              Code
            </button>
          </a>
          <a href={`${info.demo}`} target="_blank">
            <button className=" w-[10rem] py-1 sm:py-2 border-1 border-gray-400 text-[1.2rem] sm:text-[1.5rem] text-gray-300 font-semibold rounded-2xl hover:bg-gradient-to-r from-pink-800 to-rose-800 bg-pink-700">
              Demo
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
