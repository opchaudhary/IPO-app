// Login.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../components/Login.css';
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { userLogin} = useAuth();
  const [logged, setLogged] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
   
    // Simulate authentication logic 
    if (credentials.username === 'omprakash' && credentials.password === 'om') {
     // onLogin(setCredentials);
     userLogin();
     setLogged(true);
      alert("Login successfully")
      console.log("Login Successfully!",credentials.username);
    } else {
      console.log("invalid username or password!",credentials.username);
      alert('invalid username or password');
    }
  };
  
  if (logged) {
    return <Navigate to="/dashboard" />;
  }


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form> 
      <p data-testid="error-message">
        Invalid username or password. Please try again.
      </p>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default Login;
