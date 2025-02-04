import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AdditionalTopbar from './components/additionalTopbar/additionalTopbar';
import { stickyScrollHandler } from './utilities/utilities';
import { connect } from 'react-redux';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import BookAppointment from './pages/bookAppointment/bookAppointment';
import Footer from './components/footer/footer';
import { ToastContainer, Bounce } from 'react-toastify';
import PaymentRedirect from './pages/bookAppointment/paymentRedirect/paymentRedirect';
const Massages = lazy(() => import('./pages/massages/massages'));



function App({ mobileWidth, userInput }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    const topbar = document.querySelector('.topbar')
    window.addEventListener('resize', () => stickyScrollHandler(topbar, mobileWidth));
    window.addEventListener('scroll', () => stickyScrollHandler(topbar, mobileWidth));
  }, []);

  console.log(userInput);
  


  return (
      <div className="app">
        <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick={false}
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition={Bounce}
                      />
        <div className='sidedrawer'>
          <Sidedrawer />
        </div>
        <div className="topbar">
            <AdditionalTopbar />
            <Topbar />
        </div>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/book-appointment' element={<BookAppointment />} />
            <Route path='/book-appointment/payment-success' element={<PaymentRedirect />} />
            <Route path='/massages/:massageId' element={<Suspense fallback={'loading...'}><Massages /></Suspense>}/>
        </Routes>
        <Footer />
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mobileWidth: state.mobileWidth,
    userInput: state.userInput
  }
}

export default connect(mapStateToProps)(App);
