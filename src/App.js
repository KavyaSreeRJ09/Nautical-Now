import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import MapPage from './MapPage';

function App() {
  function handleDateAndTime() {
    // Future implementation
  }

  return (
    <Router>
      <div className="svg-wave-container">
        <h1 className="header-text">Nautical Now</h1>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1e90ff" fillOpacity="1" d="M0,192L30,213.3C60,235,120,277,180,272C240,267,300,213,360,202.7C420,192,480,224,540,213.3C600,203,660,149,720,128C780,107,840,117,900,128C960,139,1020,149,1080,154.7C1140,160,1200,160,1260,149.3C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
