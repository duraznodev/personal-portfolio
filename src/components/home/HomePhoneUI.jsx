import { IoLogoReact } from "react-icons/io5";
import { GroupIcons } from "../";
import { FiChevronsDown } from "react-icons/fi";
import profile from "/src/assets/profile-pic.png";

export const HomePhoneUI = ({ text }) => {
  return (
    <div className="flex w-full items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <figure className="w-8/12 border-2 border-neutral-300">
            <img className="aspect-square  object-cover" src={profile} />
          </figure>
        </div>
        <div className="flex w-10/12 flex-col items-center justify-center ">
          <div className="mt-3 flex items-center gap-3 text-center text-3xl">
            <h1 className="font-bold">Roman Rizo</h1>
            <IoLogoReact />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mt-2">Front-end Developer</h2>
            <p className="mt-4 block max-w-lg text-center text-lg text-neutral-700">
              {text}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            <a
              href="#contact"
              className="cursor-pointer gap-1 rounded-xl bg-neutral-900 px-6 py-4 text-xl font-medium text-neutral-50 hover:bg-neutral-700"
            >
              <span>Contact Me!</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1_HY5u9wR0-KQhX2DtalZmGvz9f8u1X2z/view?usp=share_link"
              target="_blank"
              className="gap-1 rounded-xl border-2 border-neutral-900 bg-neutral-100 px-6 py-4 text-xl font-medium text-neutral-900 hover:bg-neutral-900 hover:text-neutral-200"
            >
              <span className="font-bold">CV</span>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <GroupIcons />
          </div>
          <div className="mt-3 animate-bounce-slow text-4xl text-neutral-500 ">
            <FiChevronsDown />
          </div>
        </div>
      </div>
    </div>
  );
};
