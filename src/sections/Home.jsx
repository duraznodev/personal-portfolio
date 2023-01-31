import { IoLogoReact } from "react-icons/all";

import { AsideIcons } from "../components";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex h-screen items-center justify-center gap-10 text-neutral-800"
    >
      <div className="flex items-center justify-center gap-5">
        <AsideIcons />
        <div className="it flex w-8/12 items-center justify-center">
          <div className="w-7/12">
            <div className="flex items-center gap-3 text-6xl">
              <h1 className=" font-bold">Roman Rizo</h1> <IoLogoReact />
            </div>
            <h2 className="mt-5 text-2xl">---- Front-end Developer</h2>
            <p className="mt-4 block max-w-lg text-lg text-neutral-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur earum ad accusamus architecto ipsam tenetur nostrum
              perferendis
            </p>
            <button className="mt-6 gap-1 rounded-xl bg-neutral-900 px-6 py-4 text-xl font-medium text-neutral-50 hover:bg-neutral-700">
              <span>Contact Me!</span>
            </button>
          </div>
          <figure className="w-4/12 shadow-2xl">
            <img
              className="aspect-square object-cover"
              src="/src/assets/profile-pic.png"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
