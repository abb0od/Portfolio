import GithubIcon from '../Icons/GithubIcon';

interface FooterProps {
  email: string;
  linkedIn: string;
  github: string;
}

const Footer = ({ email, linkedIn, github }: FooterProps) => {
  return (
    <footer className="p-6 bg-white shadow-inner text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="flex items-center gap-2">
          <span>📧</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
            {email}
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
          >
            <span>🔗</span>
            <span>LinkedIn</span>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
