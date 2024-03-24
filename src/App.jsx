import "./App.css";
import React, { useRef } from "react";

import AnimatedCursor from "react-animated-cursor";
import Left from "./assets/left";
import Right from "./assets/right.jsx";


export default function App() {

  return (
    <div
    className="magicpattern sm:flex-col md:flex-col flex lg:flex-row xl:flex-row 2xl:flex-row justify-center gap-5 pt-8"
    >
      <AnimatedCursor
        innerSize={0}
        outerSize={15}
        color="120, 180, 255"
        showSystemCursor={true}
        outerAlpha={1.0}
        innerScale={0.8}
        outerScale={2}
        trailingSpeed={15}
      />

      <Left />
      <Right />
      
      


    </div>
  );
}
