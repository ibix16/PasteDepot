import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePaste from './components/CreatePaste';
import PasteView from './components/PasteView';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute'; // Assuming this is already defined
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/create" element={<CreatePaste />} />
          <Route path="/paste/:id" element={<PasteView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
