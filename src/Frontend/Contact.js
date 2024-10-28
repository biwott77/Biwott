import React from 'react';
import '../styles/Contact.css';
import { useTypewriter } from 'react-simple-typewriter';


const ContactPage = () => {

  const [text] = useTypewriter({
    words: ['Whats up?', 'How are you Today?', 'What are you doing?', 'What is your name?', 'What is your email?', 'What is your message?', 'Fill the form To-', 'Get in Touch'],
    loop: 0,
    delaySpeed: 1000,
    deleteSpeed: 50,
    typeSpeed: 70
  })
  return (
    <div className="contact-page">
      <div className="contact-container">
      <div className="title-container">
          <h1>
            <span>{text}</span>
            
          </h1>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p style={{color: 'darkmagenta'}}>Email: your.email@example.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p style={{color: 'darkmagenta'}}>Phone: +1 234 567 890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p style={{color: 'darkmagenta'}}>Location: Your Location</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
