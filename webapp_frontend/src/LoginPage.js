import React, { useState } from 'react';
import background from './images/dec1.jpg'
import { Link } from 'react-router-dom';
import { Switch, Route,Router } from 'react-router-dom';


import './LoginPage.css'// Import CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Your code to handle sign in
    // For demonstration purpose, we will just log a message
    console.log("Signing in...");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Your code to handle login with email and password
    // For demonstration purpose, we will just log the values
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form fields after submission (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${background})` }}>

      <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="submit" value="Login" />
          </form>
          <div className="button-group">
          <Link to="/signup">
            <button className="sign-in-btn" onClick={handleSignIn}>Sign in</button>
          </Link>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;
