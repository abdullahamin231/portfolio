import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-background min-h-[100vh]">
      <Nav />
      <div className="xl:px-[15rem] lg:px-[15rem] md:px-4 xs:px-4">
        <AnimatedCursor
          innerSize={0}
          outerSize={15}
          color="99, 102, 241"
          showSystemCursor={true}
          outerAlpha={1.0}
          innerScale={0.8}
          outerScale={2}
          trailingSpeed={15}
        />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
