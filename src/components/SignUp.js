import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './auth.css'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      // Redirect after successful sign-up
      navigate('/login');
    } catch (error) {
      // Check for password-related errors and set the error message
      if (error.message.includes('password')) {
        setErrorMessage('Password is too short. Must be at least 6 characters.');
      } else {
        setErrorMessage('Error signing up. Please try again.');
      }
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>Sign Up</h2>
        <p>Check email address for confirmation after signing up</p>
      </div>

      {/* Display error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSignUp} className="auth-form">
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
        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-footer">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
