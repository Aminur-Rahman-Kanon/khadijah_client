import React, { useEffect } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import AdditionalTopbar from './components/additionalTopbar/additionalTopbar';
import { stickyScrollHandler } from './utilities/utilities';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const topbar = document.querySelector('.topbar')
    window.addEventListener('scroll', () => stickyScrollHandler(topbar));
}, [])

  return (
      <div className="app">
        <div className="topbar">
            <AdditionalTopbar />
            <Topbar />
        </div>
        <Routes>
            <Route path='/' element={<Homepage />}/>    
        </Routes>
      </div>
  );
}

export default App;
