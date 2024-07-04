import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <>
      <div
        className="py-24 px-40 lg:px-[9rem] flex lg:justify-between flex-col-reverse items-center lg:flex-row scroll-smooth lg:gap-6"
        id="about"
      >
        <div className=" text-white lg:w-[40rem] flex flex-col items-center lg:items-start">
          <h1 className="lg:text-[3rem] sm:text-[2.4rem] text-[2rem] font-serif ">
            Hi, I am
          </h1>
          <h1 className="lg:text-[3rem] sm:text-[2.4rem] text-[2rem] -mt-3 font-serif">
            Harsh Tayal
          </h1>
          <div>
            <div className="hidden sm:flex justify-center text-[1.3rem] sm:text-[2rem] sm:w-[30rem] font-serif lg:justify-start lg:inline">
              I am a{" "}
            </div>
            <div className="flex sm:hidden text-[1.3rem] font-serif w-[10rem] justify-center">
              I am a
            </div>
            <div className="flex justify-center w-[10rem] sm:w-[30rem] lg:justify-start lg:inline">
              <TypeAnimation
                className="sm:text-[2rem] font-serif text-[1.3rem] text-[#D74E09]"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Programmer",
                  1500,
                  "Web developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="text-[1.2rem] mt-4 mb-10 text-gray-400 font-serif text-center lg:text-start">
            I am currently studying Computer Science Engineering at Delhi
            Technological University. As a motivated and passionate learner, I
            am focused on strengthening my programming skills and preparing for
            future job opportunities in the field of software engineering. I am
            currently practicing my skills in DSA and dev. I am passionate about
            developing efficient and scalable software and enjoy collaborating
            with others to create innovative solutions. If you are interested in
            connecting with me to discuss software development or other topics,
            please feel free to send me a message.
          </p>
          <a
            href="https://drive.google.com/file/d/1j7PuvWpNeoQarh5ee1uuVHGlhg4ke24f/view?usp=share_link"
            target="_blank"
          >
            <button className="rounded-3xl lg:text-2xl text-[1.2rem] hover:bg-gradient-to-r from-fuchsia-800 to-purple-900 sm:py-5 sm:px-16 py-3 px-14 font-bold bg-purple-800">
              Check Resume
            </button>
          </a>
        </div>

        <div
          className=" lg:h-[27rem] lg:w-[27rem] sm:h-[24rem] sm:w-[24rem] h-[16rem] w-[16rem] overflow-hidden border-2 border-purple-600 rounded-full
          border-5 mb-10"
        >
          {/* must be in public folder  */}
          <img
            src="images/niku.jpg"
            alt="harsh pic"
            className=" h-full w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
