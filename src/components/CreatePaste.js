import React, { useState } from 'react';
import './createPaste.css';
import { Link } from 'react-router-dom';
import logo from './pastedepot-high-resolution-logo-black.png';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; 
import { useAuth } from '../AuthContext'; 

const CreatePaste = () => {
  const [pasteContent, setPasteContent] = useState('');
  const [language, setLanguage] = useState('JavaScript');
  const [title, setTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the current user from useAuth hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    const newPaste = {
      user_id: user.id, // User ID from the authenticated user
      title,
      content: pasteContent,
      language,
    };

    try {
      const { data, error } = await supabase
        .from('pastes')
        .insert([newPaste]);

      if (error) throw error;

      // Reset form fields
      setTitle('');
      setPasteContent('');
      setLanguage('JavaScript');

      // Redirect to home page or another success page
      navigate('/');
    } catch (error) {
      console.error('Failed to save the paste:', error);
      setIsSaving(false);
    }
  };

  return (
    <div className="create-paste">
      <Link to="/" className="logo-top-left">
        <img src={logo} alt="Website Logo" className="logo" />
      </Link>
      <header className="create-paste-header">
        <h1>Create a New Paste</h1>
      </header>

      <form onSubmit={handleSubmit} className="create-paste-form">
        <div className="form-group">
          <label htmlFor="title">Paste Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Csharp">C#</option>
            <option value="html">HTML</option>
            <option value="CSS">CSS</option>
            <option value="json">JSON</option>
            <option value="Go">GoLang</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="content">Paste Content:</label>
          <textarea
            id="content"
            value={pasteContent}
            onChange={(e) => setPasteContent(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="save-button" disabled={isSaving}>
          {isSaving ? 'Saving...' : 'Save Paste'}
        </button>
      </form>
    </div>
  );
};

export default CreatePaste;
