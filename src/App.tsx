import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {
  const skills = [
    'Angular, React, Next.js',
    '.NET Core, ASP.NET, C#',
    'SQL Server, MongoDB',
    'Git, Power BI, SSIS'
  ]

  const projects = [
    {
      title: 'People365',
      description: 'Built and enhanced HR and business management applications using Angular, ASP.NET and .NET Core. Improved performance and added client-requested features.'
    },
    {
      title: 'Millennium Business Management',
      description: 'Developed a company-wide management system with React, Redux, and ASP.NET Core. Features included ticketing, project management, and reporting.'
    }
  ]

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header 
        name="Abed-Elraouf Abboud"
        title="Full-Stack Developer"
        profileImage="/src/assets/images/profile.jpg"
        cvUrl="/assets/abedcv.pdf"
      />
      <About 
        description="Full-Stack Developer with extensive experience in ASP.NET, .NET Core, C#, JavaScript, TypeScript, Angular, and ReactJS. Currently at People 365, I handle all phases of software development, from design to deployment. Previously at Millennium Business Management, I developed dynamic data solutions and web applications."
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Footer 
        email="abed_abboud@hotmail.com"
        linkedIn="https://lb.linkedin.com/in/abed-elraouf-abboud-40626a143"
        github="https://github.com/abb0od?tab=repositories"
      />
    </div>
  )
}

export default App
