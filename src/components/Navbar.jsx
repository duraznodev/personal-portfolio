import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavAnchor } from "./";

const initialState = [
  { text: "Home", active: true, href: "#home" },
  { text: "Skills", active: false, href: "#skills" },
  { text: "Portfolio", active: false, href: "#portfolio" },
  { text: "Contact", active: false, href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorList, setAnchorList] = useState(initialState);

  const handleActive = (href) => {
    setAnchorList(
      anchorList.map((anchor) =>
        anchor.href === href
          ? { ...anchor, active: true }
          : { ...anchor, active: false }
      )
    );
  };

  return (
    <nav className="fixed w-screen select-none items-center justify-center rounded border-neutral-200 bg-neutral-100 bg-opacity-70 px-8 pb-4 pt-6 text-neutral-900 sm:py-10 sm:px-24 ">
      <div className="container flex items-center justify-between text-2xl font-medium text-neutral-800">
        <div className="flex items-center justify-center gap-2 hover:text-neutral-900">
          <a href="#home">
            <span className="font-semibold">duraznodev</span>
          </a>
        </div>
        <div className="flex sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="scale-125" />
          </button>
        </div>
        <div className="hidden gap-6 text-neutral-700 sm:flex">
          {anchorList.map(({ text, active, href }) => (
            <NavAnchor
              text={text}
              active={active}
              href={href}
              key={href}
              onClick={() => handleActive(href)}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute right-0 top-0 z-10 flex w-full justify-end  shadow-lg "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className=" h-screen w-5/12  bg-neutral-100  py-10 px-8">
            <div className="mt-20 flex flex-col items-center gap-10">
              {anchorList.map(({ text, active, href }) => (
                <NavAnchor
                  text={text}
                  active={active}
                  href={href}
                  key={href}
                  onClick={() => handleActive(href)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
