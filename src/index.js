import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './index.css';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the App with AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
