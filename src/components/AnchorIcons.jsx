export const AnchorIcon = ({ href, icon }) => {
  return (
    <a
      className="cursor-pointer hover:text-neutral-700"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
};
