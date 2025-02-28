import Button from "./EncryptedButton";
import SlideIn from "./SlideIn";

export default function Intro() {
  return (
    <div className="font-inter text-text mt-[6rem]  flex flex-col gap-2 items-start mb-[20rem]">
      <SlideIn>
        <h1 className="xl:text-[6rem] lg:text-[6rem] md:text-[4rem] sm-text-[4rem] xs:text-[4rem]  font-900">
          Hi, I'm Abdullah<span className="text-primary">.</span>
        </h1>
      </SlideIn>

      <SlideIn>
        <h2 className="text-[2rem] font-600 pb-1">
          I'm a <span className="text-primary">Full Stack Engineer</span>
        </h2>
      </SlideIn>

    </div>
  );
}
