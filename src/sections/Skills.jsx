import { Section, SkillGallery } from "../components";

export const Skills = () => {
  return (
    <>
      <Section title="Skills" id="skills" subtitle="My best strengths">
        <div className="mx-10 flex flex-wrap justify-center">
          <SkillGallery />
        </div>
      </Section>
    </>
  );
};
