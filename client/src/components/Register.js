import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*const onSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   axios.post('http://localhost:5000/register', formData)
   .then((response) => {
    console.log('User registered:', response.data);
    window.location.href = "/login";
   })
   .catch((error) =>{
    console.error('Error Registering user', error);
   });
  };*/

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register/', formData)
      .then((response) => {
        console.log('User registered:', response.data);
        alert('Registration successful!'); // Feedback to user
        window.location.href = '/login';   // Redirect to login page or home
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        alert('Error registering user. Please try again.');
      });
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

