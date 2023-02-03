import { AnchorIcon } from "./";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    href: "https://github.com/duraznodev",
    icon: <FiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/roman-rizo-688036224",
    icon: <FiLinkedin />,
  },
  {
    href: "https://twitter.com/romanrizodev",
    icon: <FiTwitter />,
  },
];

export const GroupIcons = ({ col }) => {
  return (
    <div
      className={`flex gap-8 text-3xl text-neutral-900 ${
        col ? "flex-col" : ""
      }`}
    >
      {socialLinks.map(({ href, icon }) => (
        <AnchorIcon href={href} icon={icon} key={href} />
      ))}
    </div>
  );
};
