import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-[20rem] bg-gradient-to-r from-stone-900 to-purple-900 clip-footer mt-24 flex flex-col items-center justify-center">
        <h1 className="text-[1.5rem] sm:text-[2rem] text-gray-200 font-bold">
          Harsh Tayal
        </h1>
        <div className="mt-5 mb-5">
          <ul className="flex gap-8 text-[1.2rem] sm:text-[1.7rem] text-gray-100">
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

        <div className="flex gap-8">
          <a href="https://www.facebook.com/harsh.tayal.965/" target="_blank">
            <FaFacebookSquare className="text-white" size={20} sm:size={24} />
          </a>
          <a href="https://twitter.com/HarshTa04671764" target="_blank">
            <FaTwitter className="text-white" size={20} sm:size={24} />
          </a>

          <a
            href="https://linkedin.com/in/harsh-tayal-83ab83253"
            target="_blank"
          >
            <FaLinkedin className="text-white" size={20} sm:size={24} />
          </a>
          <a href="https://www.instagram.com/harshtayal2005/" target="_blank">
            <FaInstagram className="text-white" size={20} sm:size={24} />
          </a>
        </div>

        <div className="bg-gradient-to-r from-pink-700 to-rose-700 rounded-lg px-5 py-1 mt-4">
          <h1 className="text-[1.2rem] text-gray-100">
            Contact: harshtayal2005@gmail.com
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-1 bottom-0 mt-6">
          <FaRegCopyright className="text-white" />
          <p className="text-white">2024 Harsh Tayal. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
