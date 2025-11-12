import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-box">
              <h3>📧 Email</h3>
              <p>aditiya080904@gmail.com</p>
            </div>
            <div className="info-box">
              <h3>📱 Phone</h3>
              <p>+91 9696571779</p>
            </div>
            <div className="info-box">
              <h3>📍 Location</h3>
              <p>Kanpur, India</p>
            </div>
            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/aditiya-shanker-shukla-04493b1b5/" className="social-icon">LinkedIn</a>
                <a href="https://github.com/Aaddiie/" className="social-icon">GitHub</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
