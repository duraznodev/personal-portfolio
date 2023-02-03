import { PortfolioItem, Section } from "../components";

const projects = [
  {
    imageSrc: "/src/assets/productive-timer.png",
    title: "Productive Timer",
    siteUrl: "https://productive-timer-omega.vercel.app/",
    githubUrl: "https://github.com/duraznodev/productive-timer",
  },
  {
    imageSrc: "/src/assets/random-quotes.png",
    title: "Random Quotes",
    siteUrl: "https://random-quotes-blush.vercel.app/",
    githubUrl: "https://github.com/duraznodev/random-quotes",
  },
];

export const Portfolio = () => {
  return (
    <Section title="Portfolio" subtitle="My recent work" id="portfolio">
      <div className="mx-10 flex flex-wrap justify-center gap-5">
        {projects.map((project) => (
          <PortfolioItem {...project} key={project.siteUrl} />
        ))}
      </div>
    </Section>
  );
};
