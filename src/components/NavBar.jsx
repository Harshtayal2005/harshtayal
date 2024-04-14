const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap justify-around py-3 gap-3 px-10 items-center text-white sticky top-0 bg-[#0c040e] z-10 scroll-smooth">
        <div className="font-bold flex items-center gap-1 sm:text-[1.5rem]">
          <span className="text-purple-600">&lt;</span>
          <span> Harsh</span>
          <span className="text-purple-600"> / </span>
          <span>Tayal </span>
          <span className="text-purple-600">&gt;</span>
        </div>

        <div>
          <ul className="flex sm:gap-5 gap-2 sm:text-[1.5rem]">
            <a href="#about">
              <li>About</li>
            </a>

            <a href="#skill">
              <li>Skills</li>
            </a>
            <a href="#project">
              <li>Projects</li>
            </a>
          </ul>
        </div>

        <div>
          <a href="https://github.com/Harshtayal2005" target="_blank">
            <button className="px-6 py-[0.5rem] border border-purple-600 rounded-full sm:text-[1.5rem] text-purple-600 font-bold">
              Github
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
