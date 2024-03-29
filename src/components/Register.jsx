// Register.js
import React, { useState } from 'react';
import './Register.css'
import "react-toastify/dist/ReactToastify.css";
import {useAuth}  from '../context/AuthContext.js'
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: 'omprakash',
    email: 'omprakash@gmail.com',
    password: '123456789',
  });

  const [isSuccesfull, setIsSuccessful]=useState(false);
  const {registerUser} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
    setIsSuccessful(true);
   console.log("Form submitted successfully!", formData);
  };
  
  if (isSuccesfull) {
    return <Navigate to="/login" />;
  }


  return (
    <div className='register-container' >
      <h2 >Register Form</h2>
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
