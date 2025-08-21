import styles from './Header.module.css';

interface HeaderProps {
  name: string;
  title: string;
  profileImage: string;
  cvUrl: string;
}

const Header = ({ name, title, profileImage, cvUrl }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className={styles.profileImage}
            />
          </div>
          <div className={styles.infoContainer}>
            <h1 className={styles.headerTitle}>{name}</h1>
            <p className={styles.headerSubtitle}>{title}</p>
          </div>
        </div>
        
        <a
          href={cvUrl}
          download="Abed-Elraouf-Abboud-CV.pdf"
          className={styles.downloadButton}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
