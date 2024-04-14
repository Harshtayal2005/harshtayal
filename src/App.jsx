import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#0c040e] relative scroll-smooth">
        <NavBar></NavBar>
        <Intro></Intro>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
