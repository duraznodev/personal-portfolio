import { SiReact } from "react-icons/si";
import { NavButton } from ".";

const buttons = [
  { text: "Home", active: true },
  { text: "Skills", active: false },
  { text: "Portfolio", active: false },
  { text: "Contact", active: false },
];

export const Navbar = () => {
  return (
    <nav className="fixed flex w-screen select-none items-center justify-center rounded border-neutral-200 px-16 py-6 text-neutral-900 shadow-md">
      <div className="font-poppins container flex items-center justify-between text-xl font-medium text-neutral-800">
        <div className="flex cursor-pointer items-center justify-center gap-2 hover:font-semibold hover:text-neutral-900">
          <span>Duraznodev</span>
        </div>
        <div className="flex gap-6 text-neutral-700">
          {buttons.map(({ text, active }) => (
            <NavButton text={text} active={active} />
          ))}
        </div>
      </div>
    </nav>
  );
};
