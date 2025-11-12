import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
