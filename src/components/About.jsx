import SlideIn from "./SlideIn";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { BiSolidTerminal } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";

// Define the lang component if it's not already defined
export default function About() {
  const work = [
    "JavaScript",
    "NextJS",
    "React",
    "NodeJS",
    "HTML",
    "CSS",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "SocketIO",
    "GitHub",
  ];

  const fun = ["C++", "Python", "BeautifulSoup", "Pandas", "Selenium"];

  return (
    <div className="mb-40">
      <div className="flex flex-row  items-center xl:gap-[3rem] lg:gap-[3rem] md:gap-[2rem] sm:gap-[1rem] xs:gap-4 pb-8">
        <SlideIn>
          <h1 className="text-[3rem] text-text font-inter font-900">
            About<span className="text-primary">.</span>
          </h1>
        </SlideIn>
        <div className="flex-grow h-[1px] bg-[#4b4b54]"></div>
      </div>

      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-4 xs:col-span-3">
          <p className="text-[#D2D2D6] text-lg xs:text-sm flex flex-col gap-7 items-start font-inter">
            <SlideIn>
              <span className="">
                Hey! I'm Abdullah, if you haven't already gathered that by now.
                I'm a graphic designer turned software engineer from Islamabad,
                Pakistan. I specialize the backend, primarily Node but love
                building with whatever tools are right for the job.
              </span>
            </SlideIn>
          </p>
          <SlideIn>
            <div className="flex mt-2 flex-row items-center gap-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abdullahamin231/"
              >
                <FaLinkedinIn
                  color="white"
                  size={20}
                  className="px-1 cursor-pointer hover:bg-primary duration-150 transition-all  hover:scale-125"
                />
              </a>
              <a target="_blank" href="https://www.github.com/abdullahamin231">
                <RxGithubLogo
                  color="white"
                  size={20}
                  className="cursor-pointer   hover:bg-primary duration-150 transition-all  hover:scale-125"
                />
              </a>

              <a target="_blank" href="https://www.x.com/xetodesigns">
                <FaXTwitter
                  color="white"
                  size={20}
                  className="cursor-pointer hover:bg-primary duration-150 transition-all  hover:scale-125"
                />
              </a>
            </div>
          </SlideIn>
        </div>
        <div className="col-span-2 xs:col-span-3 flex flex-col gap-2">
          <SlideIn>
            <h1 className="flex flex-row items-center gap-2 text-text font-600 text-lg font-poppins">
              <BiSolidTerminal color="6366F1" size={25} /> Use at work.
            </h1>
          </SlideIn>

          <div className="flex flex-row items-center flex-wrap gap-2 pb-4">
            {work.map((single, index) => (
              <SlideIn>
                <div
                  key={index}
                  className="bg-[#3F3F46]  text-text font-poppins px-2 rounded-md py-1 xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xs w-fit"
                >
                  {single}
                </div>
              </SlideIn>
            ))}
          </div>

          <SlideIn>
            <h1 className="flex flex-row items-center gap-2 text-text font-600 text-lg font-poppins">
              <HiMiniCodeBracketSquare color="6366F1" size={25} /> Use for fun.
            </h1>
          </SlideIn>

          <div className="flex flex-row items-center flex-wrap gap-2">
            {fun.map((single, index) => (
              <SlideIn>
                <div
                  key={index}
                  className="bg-[#3F3F46] text-text font-poppins px-2 rounded-md py-1 text-sm w-fit"
                >
                  {single}
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
