import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Contact.css';
import logo from './logo.png.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import buildingImage from './buildingImage.jpg'; // import the building image

const Contact = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Real Wealth Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/investments">Investments</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="auth-buttons">
          <Link className="login-button" to="/register">
          Register
          </Link>
          <Link className="login-button" to="/login">
          Login
          </Link>
        </div>
      </nav>

      {/* Contact Section */}
<div className="cont-container">
      <h1>Get in Touch with Real Wealth</h1>
<p>We’re here to help! Whether you’re looking for more information on our investment offerings, have questions, or need support, our team is just a message away.</p>    
<br />
<p><strong> Contact Information</strong></p>
<ul><p>
  Email: support@real-wealth.com</p></ul>
  <ul><p>
  Phone: +234 706 916 3131</p></ul>
  <ul><p>
  Address: 21, Cooper road, Ikoyi, Lagos.</p></ul><br />

  <p><strong> Stay Connected</strong></p>
  <p>Follow us on our social media platforms to stay updated on new opportunities and real estate insights.</p><br />
  <p><strong> Reach Out Today</strong></p>
  <p>Fill out the form below, and one of our representatives will reach out to you shortly to assist with any inquiries or help you start your investment journey with Real Wealth.</p>
</div>

    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

