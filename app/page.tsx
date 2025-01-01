"use client";

export default function Page() {
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
               <p><strong>Duration:</strong></p>
              <p>June 2022 – August 2022</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
