import { useState } from 'react'
import LandingPage from './components/ui/landingPage.jsx'
import MusicPlayer from './components/player/MusicPlayer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { motion } from "framer-motion";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/player" element={<MusicPlayer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
