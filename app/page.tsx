"use client";
import { useState, useEffect} from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState("technical");

  // Initial state of progress values
  const technicalSkills = [
    { name: "HTML & CSS", progress: 80 },
    { name: "JavaScript", progress: 80 },
    { name: "React", progress: 50 },
    { name: "Node.js", progress: 60 },
  ];

  const softSkills = [
    { name: "Communication", progress: 95 },
    { name: "Teamwork", progress: 90 },
    { name: "Problem-Solving", progress: 85 },
    { name: "Time Management", progress: 80 },
  ];

  const [progressValues, setProgressValues] = useState(new Array(4).fill(0)); // Initially 0%

  // Update progress values when the active tab changes
  useEffect(() => {
    // Reset progress to 0% when changing tabs
    setProgressValues(new Array(4).fill(0));

    // Determine which skills to show based on the active tab
    const targetSkills = activeTab === "technical" ? technicalSkills : softSkills;
    const newProgressValues = targetSkills.map((skill) => skill.progress);

    // Add a small delay before updating the progress values to trigger animation
    setTimeout(() => {
      setProgressValues(newProgressValues);
    }, 100); // 100ms delay to ensure the progress starts at 0
  }, [activeTab]);


  
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="display-1">Astha Jain</h1>
          <p className="lead">Passionate about changing the world with technology.</p>
          <div className="social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mohd-shahid-iqbal"
              aria-label="My GitHub"
            >
              <i className="fab fa-github fa-3x socialicons"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100002142394297"
              aria-label="My Facebook"
            >
              <i className="fab fa-facebook fa-3x socialicons"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/shahid27945/"
              aria-label="My Instagram"
            >
              <i className="fab fa-instagram fa-3x socialicons"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mohd-shahid-iqbal-2b690713b/"
              aria-label="My LinkedIn"
            >
              <i className="fab fa-linkedin fa-3x socialicons"></i>
            </a>
          </div>
          <a className="btn btn-outline-light btn-lg mt-4" href="#aboutme" role="button" aria-label="Learn more about me">
            More about me
          </a>
        </div>
      </div>

      {/* About Me Section */}
      <section id="aboutme">
        <div className="about-container">
          <img
            src="/images/project1.jpeg" // Ensure this path is correct
            alt="Profile"
            className="about-image"
          />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              My name is Astha Jain. I am a graduate of 2024 from Teerthanker Mahaveer University at Moradabad with a degree in B.Tech CSE. 
              I am most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. 
              In my free time I like working on open source projects.
            </p>
            {/* Resume Button */}
            <a
              href="/resume.pdf" // Ensure the correct path to your resume file
              download
              className="resume-btn"
              role="button"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Work Experience</h2>
        <div className="experience-container">
          {/* First Row (Two Companies) */}
          <div className="experience-row">
            <div className="experience-item">
              <img
                src="/images/2C.png" // Ensure this path is correct
                alt="Teerthanker Mahaveer University"
                className="company-logo"
              />
              <p><strong>Role:</strong> Social Media Manager</p>
              <p><strong>Duration:</strong> July 2023 – December 2024</p>
            </div>

            <div className="experience-item">
              <img
                src="/images/2C.png" // Ensure this path is correct
                alt="Teerthanker Mahaveer University"
                className="company-logo"
              />
             <p><strong>Role:</strong> Web Developer Intern</p>
             <p><strong>Duration:</strong> June 2023– August 2023</p>
            </div>
            

          {/* Second Row (Third Company) */}
          <div className="experience-row">
          <div className="experience-item">
              <img
                src="/images/3C.jpeg" // Ensure this path is correct
                alt="Firstcry.com"
                className="company-logo"
              />
              <p><strong>Role:</strong> Manager</p>
              <p><strong>Duration:</strong> Fulltime</p>
            </div>
          </div>

            <div className="experience-item">
              <img
                src="/images/1C.jpeg" // Ensure this path is correct
                alt="Allsoft Solutions"
                className="company-logo"
              />
               <p><strong>Role:</strong> Web Developer Intern</p>
               <p><strong>Duration:</strong> June 2022 – August 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section id="recent-projects">
  <h2>Recent Projects</h2>

  <div className="projects-container">
    {/* MyPortfolio Project */}
  

    <div className="project-card">
      <h3 className="project-title">MyPortfolio</h3>
      <div className="project-links">
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Clone project
        </a>
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
      <div className="pb-3">
        <strong>Languages:</strong>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">JavaScript: 51.5%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=SCSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">SCSS: 45.3%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">HTML: 3%</span>
        </a>
      </div>

      <div className="project-links">
  <a href="https://github.com/Mohd-shahid-iqbal/myportfolio/stargazers" 
  target="_blank" 
  className="btn-small">
    <span className="text-dark card-link mr-4">
      <i className="fab fa-github"></i> Stars 
    </span>
  </a>
  <span className="project-update"><strong>Updated on :</strong>January 17, 2024</span>
</div>
    </div>

    <div className="project-card">
      <h3 className="project-title">MyPortfolio</h3>
      <div className="project-links">
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Clone project
        </a>
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
      <div className="pb-3">
        <strong>Languages:</strong>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">JavaScript: 51.5%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=SCSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">SCSS: 45.3%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">HTML: 3%</span>
        </a>
      </div>

      <div className="project-links">
  <a href="https://github.com/Mohd-shahid-iqbal/myportfolio/stargazers" 
  target="_blank" 
  className="btn-small">
    <span className="text-dark card-link mr-4">
      <i className="fab fa-github"></i> Stars 
    </span>
  </a>
  <span className="project-update"><strong>Updated on :</strong>January 17, 2024</span>
</div>
    </div>

    <div className="project-card">
      <h3 className="project-title">MyPortfolio</h3>
      <div className="project-links">
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Clone project
        </a>
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
      <div className="pb-3">
        <strong>Languages:</strong>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">JavaScript: 51.5%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=SCSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">SCSS: 45.3%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">HTML: 3%</span>
        </a>
      </div>

      <div className="project-links">
  <a href="https://github.com/Mohd-shahid-iqbal/myportfolio/stargazers" 
  target="_blank" 
  className="btn-small">
    <span className="text-dark card-link mr-4">
      <i className="fab fa-github"></i> Stars 
    </span>
  </a>
  <span className="project-update"><strong>Updated on :</strong>January 17, 2024</span>
</div>
    </div>

    <div className="project-card">
      <h3 className="project-title">MyPortfolio</h3>
      <div className="project-links">
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Clone project
        </a>
        <a
          href="https://github.com/Mohd-shahid-iqbal/myportfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-small"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
      <div className="pb-3">
        <strong>Languages:</strong>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">JavaScript: 51.5%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=SCSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">SCSS: 45.3%</span>
        </a>
        <a
          className="card-link"
          href="https://github.com/Mohd-shahid-iqbal/myportfolio/search?l=HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="badge bg-light text-dark">HTML: 3%</span>
        </a>
      </div>

      <div className="project-links">
  <a href="https://github.com/Mohd-shahid-iqbal/myportfolio/stargazers" 
  target="_blank" 
  className="btn-small">
    <span className="text-dark card-link mr-4">
      <i className="fab fa-github"></i> Stars 
    </span>
  </a>
  <span className="project-update"><strong>Updated on :</strong>January 17, 2024</span>
</div>
    </div>
  </div>
</section>


 {/* Leadership Section */}
 <section id="leadership">
        <div className="container py-5">
          <h2 className="display-4 pb-5 text-center">Leadership</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="lead">
                As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.
              </p>
            </div>

            {/* Carousel Slider */}
            
        
          </div>
        </div>
      </section>
     

      <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="tabs">
        <button
          className={`tabButton ${activeTab === "technical" ? "activeTab" : ""}`}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skills
        </button>
        <button
          className={`tabButton ${activeTab === "soft" ? "activeTab" : ""}`}
          onClick={() => setActiveTab("soft")}
        >
          Soft Skills
        </button>
      </div>
      <div className="tabContent">
        {activeTab === "technical" && (
          <ul className="skillList">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="skillItem">
                <span className="skillName">{skill.name}</span>
                <div className="progressBar">
                  <div
                    className="progress"
                    style={{ width: `${progressValues[index]}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {activeTab === "soft" && (
          <ul className="skillList">
            {softSkills.map((skill, index) => (
              <li key={index} className="skillItem">
                <span className="skillName">{skill.name}</span>
                <div className="progressBar">
                  <div
                    className="progress"
                    style={{ width: `${progressValues[index]}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
    </>
  );
}
export default Page;