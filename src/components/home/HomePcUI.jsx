import { IoLogoReact } from "react-icons/io5";
import { GroupIcons } from "../";
import { FiChevronsDown } from "react-icons/fi";
import profile from "/src/assets/profile-pic.png";

export const HomePcUI = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <GroupIcons col />
      <div className="it flex w-8/12 items-center justify-center">
        <div className="w-7/12">
          <div className="flex items-center gap-3">
            <h1 className="text-6xl font-bold">Roman Rizo</h1>
            <IoLogoReact className="text-6xl" />
          </div>
          <h2 className="mt-5 text-2xl">---- Front-end Developer</h2>
          <p className="mt-4 block max-w-lg text-lg text-neutral-700">{text}</p>
          <div className="mt-6 flex items-center gap-6">
            <div className="flex gap-2">
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
            <div className="flex items-center gap-1 text-2xl text-neutral-500">
              <span>Scroll down!</span>
              <FiChevronsDown className="scale-125 animate-bounce-slow" />
            </div>
          </div>
        </div>
        <figure className="w-4/12 shadow-2xl">
          <img className="aspect-square object-cover" src={profile} />
        </figure>
      </div>
    </div>
  );
};
