import Button from "./EncryptedButton";
import SlideIn from "./SlideIn";

export default function Intro() {
  return (
    <div className="font-inter text-text mt-[6rem]  flex flex-col gap-2 items-start mb-[20rem]">
      <SlideIn>
        <h1 className="lg:text-[6rem] font-900 lg:leading-[7rem]">
          Hi, I'm Abdullah<span className="text-primary">.</span>
        </h1>
      </SlideIn>

      <SlideIn>
        <h2 className="text-[2rem] font-600 pb-1">
          I'm a <span className="text-primary">Full Stack Engineer</span>
        </h2>
      </SlideIn>

      <SlideIn>
        <p className="max-w-2xl text-[1rem]">
          I've spent the last year building and scaling software for some pretty
          cool companies. Let's connect!
        </p>
      </SlideIn>

      <SlideIn>
        <button className="font-inter hover:bg-text hover:text-primary duration-200 transition-all hover:cursor-pointer  px-[1rem] py-[0.5rem] font-600 rounded-md bg-secondary text-[0.875rem]">
          Contact Me
        </button>
      </SlideIn>
    </div>
  );
}
