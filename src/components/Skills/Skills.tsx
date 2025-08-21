interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Technical Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
