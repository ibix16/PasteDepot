import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; 
import './pasteView.css'; 
import logo from './pastedepot-high-resolution-logo-black.png';
import CodeHighlighter from './CodeHighlighter'; 

const PasteView = () => {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const navigate = useNavigate(); // For redirection after deletion

  useEffect(() => {
    // Fetch the paste from Supabase 
    const fetchPaste = async () => {
      try {
        const { data, error } = await supabase
          .from('pastes')  
          .select('*')
          .eq('id', id)    // Fetch paste with the matching ID
          .single();       // Ensure we get only one result

        if (error) {
          console.error('Error fetching paste:', error);
        } else {
          setPaste(data); // Set the fetched paste
        }
      } catch (err) {
        console.error('Unexpected error fetching paste:', err);
      }
    };

    fetchPaste();
  }, [id]);

  // Function to copy paste content to clipboard
  const copyToClipboard = () => {
    if (paste && paste.content) {
      navigator.clipboard.writeText(paste.content)
        .then(() => alert('Code copied to clipboard!'))
        .catch((err) => console.error('Failed to copy:', err));
    }
  };

  // Function to delete the paste
  const handleDelete = async () => {
    const confirmation = window.confirm('Are you sure you want to delete this paste?');
    if (confirmation) {
      try {
        const { error } = await supabase
          .from('pastes')  
          .delete()
          .eq('id', id);   // Delete the paste with the matching ID

        if (error) {
          console.error('Error deleting paste:', error);
        } else {
          alert('Paste deleted successfully!');
          navigate('/'); // Redirect to homepage after successful deletion
        }
      } catch (err) {
        console.error('Unexpected error deleting paste:', err);
      }
    }
  };

  if (!paste) {
    return <p>Failed to load paste ;/ please return to homepage</p>; // Loader message
  }

  return (
    <div className="paste-view">
      {/* Logo at the top-left */}
      <Link to="/" className="logo-top-left">
        <img src={logo} alt="Website Logo" className="logo" />
      </Link>

      {/* Paste title */}
      <header className="paste-header">
        <h1>Paste: {paste.title}</h1>
      </header>

      {/* Wrapper for content and the buttons */}
      <div className="paste-content-container">
        {/* Language info on the left */}
        <div className="language-info">
          <p>Language: {paste.language}</p>
        </div>

        {/* Copy and Delete buttons on the right */}
        <div className="button-container">
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="copy-button" onClick={copyToClipboard}>
            Copy Code
          </button>
        </div>
      </div>

      {/* Code container */}
      <div className="paste-content-box">
        <CodeHighlighter language={paste.language} code={paste.content} />
      </div>
    </div>
  );
};

export default PasteView;
