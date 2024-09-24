import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../AuthContext';
import logo from './pastedepot-high-resolution-logo-black.png'; 
import './Home.css'; 

const Home = () => {
  const [pastes, setPastes] = useState([]);
  const { user, logout } = useAuth(); // Get the user and logout function from context
  const navigate = useNavigate(); // Use navigate for redirecting

  useEffect(() => {
    const fetchPastes = async () => {
      if (!user) return; // If no user is logged in, don't fetch pastes

      try {
        const { data, error } = await supabase
          .from('pastes')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching pastes:', error);
        } else {
          setPastes(data);
        }
      } catch (err) {
        console.error('Unexpected error fetching pastes:', err);
      }
    };

    fetchPastes();
  }, [user]);

  // Handle the button action
  const handleAuthAction = () => {
    if (user) {
      logout(); // Log out if the user is logged in
    } else {
      navigate('/login'); // Redirect to login page if no user is logged in
    }
  };

  return (
    <div className="home">
      {/* Container for the logo and login/logout button */}
      <div className="logo-logout-container">
        <Link to="/" className="logo-top-left">
          <img src={logo} alt="Website Logo" className="logo" />
        </Link>

        {/* Conditional render for Login/Logout button */}
        <button onClick={handleAuthAction} className="logout-button">
          {user ? 'Logout' : 'Login'} {/* Shows "Logout" if user exists, else "Login" */}
        </button>
      </div>

      <header>
        <h1>PasteDepot</h1>
        <p>Fast. Simple. Snippet Sharing.</p>
      </header>

      <section className="previous-pastes-section">
        <h2>Your Previous Pastes</h2>
        <ul>
          {pastes.length > 0 ? (
            pastes.map((paste) => (
              <li key={paste.id}>
                <Link to={`/paste/${paste.id}`}>{paste.title}</Link>
              </li>
            ))
          ) : (
            <p>No pastes yet. Create a new one!</p>
          )}
        </ul>
      </section>

      <section className="create-paste-section">
        <h2>Create a New Paste</h2>
        <Link to="/create">
          <button>Create Paste</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
