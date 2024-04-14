import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      title: "Password Manager",
      img: "pwd",
      github: "https://github.com/Harshtayal2005/Password-manager-mongo",
      demo: "https://password-manager-by-ht.netlify.app",
      tools: ["React JS", "Tailwind", "Express JS", "MongoDB", "Node JS"],
    },
    {
      title: "Tic Tac Toe Game",
      img: "tic-tac-toe",
      github:
        "https://github.com/Harshtayal2005/Projects/tree/main/Projects/tic-tac-toe",
      demo: "https://tic-tac-toe-by-ht.netlify.app",
      tools: ["React JS", "Tailwind"],
    },
    {
      title: "Social media",
      img: "social-media",
      github:
        "https://github.com/Harshtayal2005/Projects/tree/main/Projects/social-media",
      demo: "https://social-media-by-ht.netlify.app",
      tools: ["React JS", "Tailwind"],
    },
    {
      title: "Zomate Clone",
      img: "zomato-clone",
      github:
        "https://github.com/Harshtayal2005/Projects/tree/main/Projects/Zomato_clone",
      demo: "https://zomato-clone-by-ht.netlify.app",
      tools: ["HTML", "CSS"],
    },
    
    {
      title: "Rock Paper Scissors Game",
      img: "rps",
      github:
        "https://github.com/Harshtayal2005/Projects/tree/main/Projects/RPS_game",
      demo: "https://rps-game-by-ht.netlify.app",
      tools: ["HTML", "CSS", "Java Script"],
    },
    {
      title: "Todo App",
      img: "todo",
      github:
        "https://github.com/Harshtayal2005/Projects/tree/main/Projects/to-do-app-2",
      demo: "https://todo-app-by-ht.netlify.app",
      tools: ["React JS", "Tailwind"],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center gap-8 mt-20 px-10 scroll-smooth">
        <h1 className="text-white text-[3rem] font-bold" id="project">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((items) => (
            <ProjectsCard info={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
