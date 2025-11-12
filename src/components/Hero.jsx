import './Hero.css';
import avatarImg from '../assets/avatar.png';

function Hero({ setActiveNav }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm a Full Stack Developer</h1>
        <p className="hero-subtitle">
          Creating beautiful and functional web experiences with modern technologies
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => setActiveNav('projects')}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setActiveNav('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="avatar">
          <img src={avatarImg} alt="Avatar" className="avatar-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
