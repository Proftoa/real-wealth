import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Home.css';
import logo from './logo.png.webp';
import buildingImage from './buildingImage.jpg'; // import the building image


const Home = () => {
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

      {/* Home Section */}

      <div>

      <div className="home-container">
      <div className="content-wrapper">
      <div className="text-content">
        <h1>Welcome to Real Wealth</h1>
        <p>Your gateway to smart real estate investments.</p>
        <p>
          Discover how Real Wealth can transform your approach to real estate investment. Our platform connects investors to high-potential real estate opportunities, combining expertise, transparency, and growth potential. Whether you're a seasoned investor or new to real estate, Real Wealth offers pathways to financial independence through strategic property investments.
        </p><br />
        <p><strong>Why Real Wealth?</strong><br />
          Curated Opportunities: We focus on well-researched, high-growth potential investments.<br />
          Ease of Access: Our platform provides streamlined tools for managing and tracking investments.<br />
          Transparency and Trust: With real-time data, we keep you informed every step of the way.
        </p><br />
        <p><button className="cta-button">Get Started</button><br />
        

        </p>

        <p>

        {/* Building Image */}
        <div className="buildingImage-container">
          <img src={buildingImage} alt="Real Wealth Property" className="buildingImage" />
      </div>
      </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Home;


