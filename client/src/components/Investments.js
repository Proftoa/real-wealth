import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Investments.css';
import logo from './logo.png.webp';
import buildingImage from './buildingImage.jpg'; // import the building image
import pix1 from './pix1.jpg';//import pix1
import pix2 from './pix2.jpg';//import pix2
import pix3 from './pix3.jpg';//import pix3


const Investments = () => {
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

      {/* Investment Section */}

      <div>

      <div className="investment-container">
        <p>Investment Opportunities</p>
        <p>Your gateway to smart real estate investments.</p>
        <p>
          Discover how Real Wealth can transform your approach to real estate investment. Our platform connects investors to high-potential real estate opportunities, combining expertise, transparency, and growth potential. Whether you're a seasoned investor or new to real estate, Real Wealth offers pathways to financial independence through strategic property investments.
        </p>
        <p><strong>Why Real Wealth?</strong><br />
          Curated Opportunities: We focus on well-researched, high-growth potential investments.<br />
          Ease of Access: Our platform provides streamlined tools for managing and tracking investments.<br />
          Transparency and Trust: With real-time data, we keep you informed every step of the way.
        </p>
        <button className="cta-button">Get Started</button>

        <p>

        {/* Building Image */}
        <div className="pix-container">
      
          <li><img src={pix1} alt="Real Wealth Property" className="pix1" /></li>
          <li><img src={pix2} alt="Real Wealth Property" className="pix2" /></li>
          <li><img src={pix3} alt="Real Wealth Property" className="pix3" /></li>
      
      </div>
      </p>
    </div>
    </div>
    </div>
  );
};

export default Investments;


