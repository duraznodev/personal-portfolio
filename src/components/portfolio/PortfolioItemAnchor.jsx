export const PortfolioItemAnchor = ({ href, text, icon, left, rigth }) => {
  const border = left ? "border-r" : rigth ? "border-l" : "";
  return (
    <a
      className={`${border} flex w-3/6 items-center justify-center gap-2 border-neutral-600 py-1 text-xl font-medium hover:cursor-pointer hover:text-neutral-600`}
      href={href}
      target="_blank"
    >
      <span>{text}</span>
      {icon}
    </a>
  );
};
