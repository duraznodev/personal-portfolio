import { FiGithub, FiLink } from "react-icons/fi";
import { PortfolioItemAnchor } from "./";

export const PortfolioItem = ({ imageSrc, siteUrl, title, githubUrl }) => {
  return (
    <div
      key={imageSrc}
      className="rounded-lg border-2 border-neutral-200 bg-neutral-50 p-5 hover:shadow-xl"
    >
      <a href={siteUrl}>
        <img
          className="aspect-square w-72 rounded-lg object-cover"
          src={imageSrc}
        />
      </a>
      <p className="mt-3 text-center text-xl font-bold">{title}</p>
      <div className="mx-3 mt-2 flex w-full items-center justify-center">
        <PortfolioItemAnchor
          href={githubUrl}
          text="Github"
          icon={<FiGithub />}
          left
        />
        <PortfolioItemAnchor
          href={siteUrl}
          text="Go to!"
          icon={<FiLink />}
          rigth
        />
      </div>
    </div>
  );
};
