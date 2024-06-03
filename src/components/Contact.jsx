import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex mt-20 flex-col items-center pb-20">
      <div className="w-full h-[1px] bg-[#4b4b54]"></div>
      <div className="bg-[#27272A] rounded-lg flex flex-col items-center px-4 gap-5 mt-10 py-4">
        <h1 className="font-inter xs:text-[2rem] text-center text-text font-900 text-[3rem]">
          Contact<span className="text-primary">.</span>
        </h1>
        <p className="font-inter xs:text-sm text-center text-text text-[1rem]">
          Shoot me an email if you want to connect! You can also find me on
          <a href="https://www.linkedin.com/in/abdullahamin231">
            Linkedin
          </a> or <a href="https://www.twitter.com/xetodesigns">Twitter</a> if
          that's more your speed.
        </p>
        <a
          href="mailto:abdullahamin231@gmail.com"
          className="font-inter xs:text-[1rem] text-center text-text font-600 text-[2rem]"
        >
          <span className="text-primary">abdullahamin231</span>@gmail.com
        </a>
      </div>
    </div>
  );
}
