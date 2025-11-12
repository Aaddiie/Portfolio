import './Header.css';

function Header({ activeNav, setActiveNav }) {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">Aditiya Shanker Shukla</div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li>
              <button
                className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}
                onClick={() => setActiveNav('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}
                onClick={() => setActiveNav('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeNav === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveNav('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeNav === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveNav('skills')}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveNav('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
