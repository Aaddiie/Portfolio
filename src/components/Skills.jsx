import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite', 'TypeScript', 'Angular'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Socket.io'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', "AWS Cloud"],
    },
    {
      category: 'Language Known',
      skills: ['C Language', 'C++', 'Python', 'JavaScript', 'Java'],
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management',],
    },
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-dot">●</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Technical Proficiency</h3>
          <div className="proficiency-bars">
            <div className="proficiency-item">
              <label>React & JavaScript</label>
              <div className="progress-bar">
                <div className="progress" style={{ width: '95%' }}></div>
              </div>
              <span className="proficiency-value">95%</span>
            </div>
            <div className="proficiency-item">
              <label>Node.js & Express</label>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
              <span className="proficiency-value">85%</span>
            </div>
            <div className="proficiency-item">
              <label>Database Design</label>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <span className="proficiency-value">80%</span>
            </div>
            <div className="proficiency-item">
              <label>UI/UX Design</label>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <span className="proficiency-value">75%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
