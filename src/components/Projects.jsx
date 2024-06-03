import SlideIn from "./SlideIn";
import { TbBrandGithubFilled } from "react-icons/tb";
import pvz from "../assets/pvz.jpg";
import blog from "../assets/blog.png";
import weather from "../assets/weather.jpeg";
import poke from "../assets/poke.gif";
import chat from "../assets/chat.png";

const Project = ({ name, src, langs, desc, link }) => {
  // Destructure props properly
  return (
    <div className="flex flex-col max-w-[505px] items-start text-text">
      <img src={src} style={{ width: "100%" }} className="max-h-[20rem]" />
      <div className="w-full flex flex-row gap-2 items-center pb-2">
        <SlideIn>
          <p
            className="text-[1.125rem] text-text pr-38 font-inter font-semibold w-full"
            style={{ whiteSpace: "nowrap" }}
          >
            {name}
            <span className="text-primary">.</span>
          </p>
        </SlideIn>
        <div className=" flex-grow h-[1px] bg-[#4b4b54]"></div>
        <SlideIn>
          <a href={link}>
            <TbBrandGithubFilled
              className="hover:scale-125 rounded-fullduration-250 transition-all cursor-pointer"
              size={25}
            />
          </a>
        </SlideIn>
      </div>

      <div className="flex flex-row items-center gap-2 ">
        {langs.map(
          (
            lang,
            index, // Add return statement here
          ) => (
            <p key={index} className="font-inter text-primary text-md">
              {lang} {index != langs.length - 1 ? "-" : ""}
            </p>
          ),
        )}
      </div>
      <p className="text-text font-inter">{desc}</p>
    </div>
  );
};

export default function Projects() {
  const list = [
    {
      name: "Weather App",
      src: weather,
      langs: ["React"],
      desc: "Weather application built to learn about APIs integration.",
      link: "https://www.github.com/weather-app",
    },
    {
      name: "Memory Card Game",
      src: poke,
      langs: ["React"],
      desc: "Memory game developed using React.",
      link: "https://www.github.com/memory-card",
    },
    {
      name: "Blog",
      src: blog,
      langs: ["MERN Stack"],
      desc: "Blogging website.",
      link: "https://www.github.com/blogging-website",
    },
    {
      name: "Chat",
      src: chat,
      langs: ["NodeJS, React, Express, PostgreSQL, Socket.IO"],
      desc: "Real-time chat application built with Socket.IO.",
      link: "https://www.github.com/messaing-app",
    },
    {
      name: "Plants VS Zombies",
      src: pvz,
      langs: ["C++", "SFML"],
      desc: "Remake of popular game Plants VS Zombies by EA Sports.",
      link: "https://www.github.com/project",
    },
  ];

  return (
    <div>
      <div className="flex flex-row  items-center gap-[3rem] pb-8">
        <div className=" flex-grow h-[1px] bg-[#4b4b54]"></div>
        <SlideIn>
          <h1 className="text-[3rem] text-text font-inter font-900">
            Projects<span className="text-primary">.</span>
          </h1>
        </SlideIn>
      </div>
      <div className="flex flex-wrap gap-8">
        {list.map(
          (
            project,
            index, // Map through the list of projects
          ) => (
            <Project
              key={index}
              name={project.name}
              src={project.src}
              langs={project.langs}
              desc={project.desc}
            />
          ),
        )}
      </div>
    </div>
  );
}
