import SkillSet from "./SkillSet";
import "../../styles/skills.css";

const Skills = () => {
  const frontendSkills = ["HTML & CSS", "JavaScript", "React", "Tailwind CSS"];
  const backendSkills = ["Node.js", "REST APIs", "Authentication"];
  const data = ["SQL databases", "MongoDB", "Data modelling"];
  const workflow = ["Git and Github", "Deployment", "Responsive design"];
  return (
    <div className="skills px-[0.5em] py-[2em]">
      <h2 id="skills" className="text-3xl mb-[1em]">
        Skills
      </h2>
      <div className="skillset py-[1em] px-[0.5em] grid grid-cols-2 gap-[2em] min-[1020px]:flex justify-between items-center">
        <SkillSet stack="Frontend" tools={frontendSkills} />
        <SkillSet stack="Backend" tools={backendSkills} />
        <SkillSet stack="Data" tools={data} />
        <SkillSet stack="Workflow" tools={workflow} />
      </div>
    </div>
  );
};

export default Skills;
