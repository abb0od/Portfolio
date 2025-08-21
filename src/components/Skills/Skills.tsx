import styles from './Skills.module.css';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>Technical Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
