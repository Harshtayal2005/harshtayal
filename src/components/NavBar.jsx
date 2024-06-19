import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(0);
  const handleMenuClick = () => {
    setToggle(toggle === 0 ? 1 : 0);
  };

  return (
    <>
      <div>
        <div
          className={
            (toggle === 1 &&
              `flex absolute h-[20rem] pt-[4.5rem] w-full justify-center text-white text-2xl bg-[#000000d8]`) ||
            (toggle === 0 && `hidden`)
          }
        >
          <ul className="flex flex-col items-center gap-4 text-[1.2rem]">
            <a
              href="https://github.com/Harshtayal2005"
              target="_blank"
              onClick={() => handleMenuClick()}
            >
              <li className="hover:text-orange-700">Github</li>
            </a>
            <a href="#about" onClick={() => handleMenuClick()}>
              <li className="hover:text-orange-700">
                About
              </li>
            </a>
            <a href="#skill" onClick={() => handleMenuClick()}>
              <li className="hover:text-orange-700">
                Skills
              </li>
            </a>

            <a href="#project" onClick={() => handleMenuClick()}>
              <li className="hover:text-orange-700">
                Projects
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-wrap justify-between sm:justify-around py-3 gap-3 px-10 lg:px-2 items-center text-white sticky top-0 bg-[#0c040e] z-10 scroll-smooth">
          <div className="font-bold flex items-center gap-1 lg:text-[1.5rem] sm:text-[1.3rem]">
            <span className="text-purple-600">&lt;</span>
            <span> Harsh</span>
            <span className="text-purple-600"> / </span>
            <span>Tayal </span>
            <span className="text-purple-600">&gt;</span>
          </div>

          <div className="hidden sm:flex">
            <ul className="flex sm:gap-5 gap-2 lg:text-[1.5rem] sm:text-[1.3rem]">
              <a href="#about">
              <li className="hover:text-orange-700">
                About
              </li>
              </a>

              <a href="#skill">
              <li className="hover:text-orange-700">
                Skills
              </li>
              </a>
              <a href="#project">
              <li className="hover:text-orange-700">
                Projects
              </li>
              </a>
            </ul>
          </div>

          <div className="hidden sm:flex">
            <a href="https://github.com/Harshtayal2005" target="_blank">
              <button className="px-6 py-[0.5rem] border border-purple-600 rounded-full lg:text-[1.5rem] sm:text-[1.3rem] text-purple-600 font-bold">
                Github
              </button>
            </a>
          </div>
          <div className="flex sm:hidden">
            <GiHamburgerMenu
              className={
                (toggle === 1 && `hidden`) ||
                `sm:hidden text-[1.25rem] hover:cursor-pointer`
              }
              onClick={() => handleMenuClick()}
            />
            <ImCross
              className={
                (toggle === 0 && `hidden`) ||
                `sm:hidden text-[1.1rem] text-[#ffffffb5] hover:cursor-pointer sticky`
              }
              onClick={() => handleMenuClick()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
