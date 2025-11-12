import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 2+ years of experience building 
              web applications. I specialize in creating responsive, user-friendly interfaces 
              and robust backend systems.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work on the internet, 
              which evolved into a career dedicated to solving complex problems and delivering 
              high-quality solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <h3>Experience</h3>
              <p>2+ Years</p>
            </div>
            <div className="info-item">
              <h3>Projects</h3>
              <p>10</p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
