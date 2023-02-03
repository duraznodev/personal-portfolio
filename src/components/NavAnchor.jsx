export const NavAnchor = ({ text, active, href, onClick }) => {
  return (
    <a
      className={`cursor-pointer px-1 text-xl hover:text-neutral-900 ${
        active && "border-b-2 border-neutral-800 text-neutral-900"
      }`}
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
