import { FiCheckSquare } from "react-icons/fi";

export const SkillItem = ({ text }) => {
  return (
    <li className="col-span-1 mx-4 my-2 flex items-center hover:text-neutral-900 sm:text-lg">
      <div className="flex items-center gap-2">
        <FiCheckSquare />
        <span>{text}</span>
      </div>
    </li>
  );
};
