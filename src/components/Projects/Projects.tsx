import styles from './Projects.module.css';

interface Project {
  title: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
