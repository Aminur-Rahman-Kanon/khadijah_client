import React, { useEffect } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AdditionalTopbar from './components/additionalTopbar/additionalTopbar';
import { stickyScrollHandler } from './utilities/utilities';
import { connect } from 'react-redux';
import Sidedrawer from './components/sidedrawer/sidedrawer';

function App({ mobileWidth }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    const topbar = document.querySelector('.topbar')
    window.addEventListener('resize', () => stickyScrollHandler(topbar, mobileWidth));
    window.addEventListener('scroll', () => stickyScrollHandler(topbar, mobileWidth));
  }, []);


  return (
      <div className="app">
        <div className='sidedrawer'>
          <Sidedrawer />
        </div>
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

const mapStateToProps = (state) => {
  return {
    mobileWidth: state.mobileWidth
  }
}

export default connect(mapStateToProps)(App);
