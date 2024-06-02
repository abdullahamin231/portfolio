import Button from "./EncryptedButton";

import { FaLinkedinIn } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
export default function Nav() {
  return (
    <nav className="flex flex-row items-center justify-between max-h-16 py-4 px-4">
      <div className="flex flex-row items-center gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/abdullahamin231/">
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
      <a href="resume.pdf" download="Abdullah_Amin_Resume">
        <Button TARGET_TEXT={"RESUME"} />
      </a>
    </nav>
  );
}
