import { GroupIcons } from "./";

export const Footer = () => {
  return (
    <footer className="w-full py-6">
      <div className="flex justify-around">
        <div className="flex items-center justify-center text-2xl">
          <a href="#home">
            <span className="font-semibold">duraznodev</span>
          </a>
        </div>
        <GroupIcons />
      </div>
    </footer>
  );
};
