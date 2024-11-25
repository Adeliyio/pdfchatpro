import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { AuthPage } from './components/auth/AuthPage';
import { Upload } from './pages/Upload';
import { Chat } from './pages/Chat';
import { Settings } from './pages/Settings';
import { Pricing } from './pages/Pricing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<AuthPage type="login" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        <Route path="/dashboard" element={<Upload />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}