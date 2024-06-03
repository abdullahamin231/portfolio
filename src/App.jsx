import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-background min-w-screen overflow-x-hidden">
      <Nav />
      <div className="2xl:px-[15rem] xl:px-[15rem] lg:px-[10rem] md:px-[7rem] sm:px-[3rem] xs:px-8">
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
