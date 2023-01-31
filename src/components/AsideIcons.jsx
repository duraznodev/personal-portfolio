import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
export const AsideIcons = () => {
  return (
    <div className="flex flex-col gap-8 text-3xl text-neutral-900">
      <button className="hover:text-neutral-700">
        <FiGithub />
      </button>
      <button className="hover:text-neutral-700">
        <FiTwitter />
      </button>
      <button className="hover:text-neutral-700">
        <FiLinkedin />
      </button>
    </div>
  );
};
