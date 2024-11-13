import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null); // Add error state

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //console.log('Login submitted:', formData);
    // Add login logic here (API call)

    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log('Login successful:', response.data);

      // Store the token or relevant data in local storage
      localStorage.setItem('token', response.data.token); // Adjust based on your API response
      setError(null);  // Clear any previous errors

      // Optionally redirect the user
      window.location.href = '/dashboard'; // Redirect to a protected route

    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
    setError(error.response.data.message || 'Invalid email or password.');
      } else {
      console.error('Error:', error.message);
      setError('An unexpected error occured.');  // Set an error message
    }
  }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
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
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}

    </div>
  );
};

export default Login;

