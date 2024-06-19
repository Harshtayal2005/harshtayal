import SkillsCard from "./SkillsCard";

const Skills = () => {
  const frontEnd = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Tailwind",
    "Bootstrap",
  ];
  const backEnd = ["Node.Js", "Express.Js", "MongoDB", "MySQL"];
  const tools = ["Git", "VS-Code", "GitHub", "Netlify", "PostMan"];

  return (
    <>
      <div className="flex flex-col items-center gap-8 scroll-smooth">
        <h1
          className="text-white lg:text-[3rem] text-[2rem] sm:text-[2.4rem] font-bold"
          id="skill"
        >
          Skills
        </h1>
        <div className="flex flex-wrap justify-center">
          <SkillsCard title={"FrontEnd"} skills={frontEnd}></SkillsCard>
          <SkillsCard title={"BackEnd"} skills={backEnd}></SkillsCard>
          <SkillsCard title={"Tools"} skills={tools}></SkillsCard>
        </div>
      </div>
    </>
  );
};

export default Skills;
