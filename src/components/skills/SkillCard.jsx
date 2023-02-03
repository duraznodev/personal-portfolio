import { SkillItem } from "./";

export const SkillCard = ({ title, skills }) => {
  return (
    <div className="w-full rounded-lg border-2 border-neutral-200 bg-neutral-50 py-4">
      <h2 className="pt-2 text-center text-xl font-medium underline underline-offset-8">
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center text-neutral-800 ">
        <ul className="grid grid-cols-2 py-4 font-medium sm:h-[35vh]">
          {skills.map(({ text }) => (
            <SkillItem text={text} key={text} />
          ))}
        </ul>
      </div>
    </div>
  );
};
