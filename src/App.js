import "./App.css";
import Home from "./Components/Home";
import About from "./Components/about";
import Header from "./Components/header";
import Skills from "./Components/skills";
import Projects from "./Components/Projects";
import Githubs from "./Components/githubs";
import Contact from "./Components/contact";
import End from "./Components/end";
import Stars from "./Components/particles";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div className="body">
      <Stars />
      <Header />
      <AnimatedCursor />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Githubs />
      <Contact />
      <End />
    </div>
  );
}

export default App;
