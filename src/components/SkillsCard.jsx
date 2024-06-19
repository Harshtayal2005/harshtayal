const SkillsCard = ({ title, skills }) => {
  return (
    <>
      <div className="border border-gray-500 shadow-[1.2px_0px_10px_0px_#f687b3] rounded-3xl w-[17rem] sm:w-[30rem] min-h-[20rem] px-10 py-5 flex m-8 flex-col items-center mb-10 gap-6 bg-gradient-to-r from-zinc-900 to-fuchsia-900 hover:scale-105 duration-200 z-0 scroll-smooth">
        <h1 className="sm:text-[2rem] text-[1.5rem] text-gray-400 font-bold">
          {title}
        </h1>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((items) => (
            <div className="text-gray-400 flex justify-center items-center gap-1 sm:text-[1.5rem] text-[1.1rem] font-semibold border-2 border-gray-500 px-5 py-2 rounded-xl ">
              <img
                src={`images/${items}.svg`}
                className="h-[1.3rem] w-[2rem]"
              />
              <p>{items}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
