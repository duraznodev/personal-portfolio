import { useEffect, useState } from "react";
import { HomePhoneUI, HomePcUI } from "../components";

const description = `I'm a Front-end Developer with a passion for learning new technologies and creating beautiful and functional web applications.`;

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      id="home"
      className="flex h-screen items-center justify-center text-neutral-800"
    >
      {windowWidth > 640 ? (
        <HomePcUI text={description} />
      ) : (
        <HomePhoneUI text={description} />
      )}
    </div>
  );
};
