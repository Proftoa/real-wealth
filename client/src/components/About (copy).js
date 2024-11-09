import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './About.css';
import logo from './logo.png.webp';
// import buildingImage from './buildingImage.jpg'; // import the building image

const About = () => {
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
          <button className="register-button">Register</button>
          <button className="login-button">Login</button>
        </div>
      </nav>

      {/* Home Section */}
      <div className="home-container">
        <h1>Who We Are</h1>
        <p>
          Real Wealth Limited is built on a foundation of industry expertise and commitment to excellence. Our mission is to simplify real estate investments, making it accessible and profitable for all investors. With years of experience in real estate and finance, our team understands market trends and is dedicated to helping clients achieve their financial goals.
        </p>
        <p>
          Discover how Real Wealth can transform your approach to real estate investment. Our platform connects investors to high-potential real estate opportunities, combining expertise, transparency, and growth potential. Whether you're a seasoned investor or new to real estate, Real Wealth offers pathways to financial independence through strategic property investments.
        </p>
        <p>
          <strong>Our Vision?</strong>
          <br />
          To revolutionize real estate investment by building a trusted platform where clients are empowered to achieve financial independence and long-term wealth through informed, transparent, and secure investment opportunities.
        </p>
        <p>
          <strong>Our Mission?</strong>
          <br />
          To provide accessible, innovative, and profitable real estate investment opportunities, fostering long-term wealth creation for our clients through integrity, transparency, and personalized support. At Real Wealth, we are committed to simplifying the investment journey, helping clients build secure futures with confidence and strategic insights.</p>
        <p>  <strong>Our Core Values</strong>
          <br />
          Integrity: Transparent operations and ethical practices.
          <br />
          Innovation: Adopting technology for seamless investment experiences.
          <br />
          Client Success: Your financial success is our top priority.
        </p>
        <p>
          We invite you to explore our platform and discover how Real Wealth can make a difference in your investment journey.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default About;

