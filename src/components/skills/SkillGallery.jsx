import { SkillCard } from "./";
const HardSkills = [
  { text: "HTML" },
  { text: "React" },
  { text: "CSS" },
  { text: "Git" },
  { text: "JavaScript" },
  { text: "TailwindCSS" },
];
const SoftSkills = [
  { text: "Self-taught" },
  { text: "Meticulous" },
  { text: "Self-management" },
  { text: "Implicated" },
  { text: "Adaptable" },
  { text: "Problem-solving" },
];

export const SkillGallery = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row ">
      <SkillCard title="Hard Skills" skills={HardSkills} />
      <SkillCard title="Soft Skills" skills={SoftSkills} />
    </div>
  );
};
