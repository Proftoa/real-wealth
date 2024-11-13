import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Investments.css';
import logo from './logo.png.webp';
//import buildingImage from './buildingImage.jpg'; // import the building image
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
        <p><strong>Investment Opportunities</strong></p><br />
        <p>Real Wealth connects you to a wide range of real estate investment options designed to meet diverse financial goals. From residential properties in prime locations to high-growth commercial spaces, we offer carefully curated investment opportunities.</p>
<br />
        <p><strong>How It Works</strong></p><br />
<ul>
  <li>
    
   <strong> Explore:</strong> Browse our available investment projects and select those that align with your goals.
  
  </li><br />
  <li>
    
    <strong> Invest:</strong> Start with a flexible investment amount and secure your stake in high-potential properties.
   
   </li><br />
   <li>
    
    <strong> Grow:</strong> Watch your investment grow with regular updates and insights on property performance.
   
   </li>
</ul>
      <br />

      <p><strong>Our Commitment</strong></p><br />
        We are dedicated to helping you build wealth sustainably. Each opportunity undergoes thorough analysis and risk assessment, ensuring a balanced portfolio for our investors. Join us and take the first step toward financial independence through real estate.

        <br />
        <div>

        {/* Building Image */}
        </div>
        <p>
        <div className="pix-container">
      

  <li><Link to="/property-details1">
    <img src={pix1} alt="Real Wealth Property" className="pix1" />
  </Link>
</li>

<li><Link to="/property-details2">
    <img src={pix2} alt="Real Wealth Property" className="pix2" />
  </Link>
</li>

<li><Link to="/property-details3">
    <img src={pix3} alt="Real Wealth Property" className="pix3" />
  </Link>
</li>
      
      </div>
      </p>

    </div>
    </div>
    </div>
  );
};

export default Investments;


