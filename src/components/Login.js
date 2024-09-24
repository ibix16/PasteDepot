import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Add Link for navigation to sign up
import { supabase } from '../supabaseClient';
import './auth.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error message

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMessage('Incorrect email or password. Please try again.');
        return;
      }

      // Redirect after successful login
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>Login</h2>
      </div>

      {/* Show error message if there is one */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
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
        <button type="submit">Login</button>
      </form>

      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default Login;
