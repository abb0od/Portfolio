interface HeaderProps {
  name: string;
  title: string;
  profileImage: string;
  cvUrl: string;
}

const Header = ({ name, title, profileImage, cvUrl }: HeaderProps) => {
  return (
    <header className="p-6 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="flex items-center gap-6">
          <div className="shrink-0 relative group">
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:z-10 cursor-pointer hover:border-blue-400 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full transition-opacity duration-300 opacity-0 bg-black/10"></div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-lg text-gray-600">{title}</p>
          </div>
        </div>
        
        <a
          href={cvUrl}
          download="Abed-Elraouf-Abboud-CV.pdf"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
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
