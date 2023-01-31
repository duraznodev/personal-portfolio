export const NavButton = ({ text, active }) => {
  return (
    <a
      className={`cursor-pointer px-1 hover:text-neutral-900 ${
        active && "border-b-2 border-neutral-800 text-neutral-900"
      }`}
      href="#home"
    >
      {text}
    </a>
  );
};
