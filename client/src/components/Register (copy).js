//import React from 'react';
import React from 'react';
//import { Link } from 'react-router-dom'; // Import Link from React Router
import './Register.css';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from './logo.png.webp';



const Register = () => {
  const [formData, setFormData] = Link({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add registration logic here (API call)
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="register-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;

