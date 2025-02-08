import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AdditionalTopbar from './components/additionalTopbar/additionalTopbar';
import { stickyScrollHandler } from './utilities/utilities';
import { connect } from 'react-redux';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import Footer from './components/footer/footer';
import { ToastContainer, Bounce } from 'react-toastify';
import PaymentRedirect from './pages/bookAppointment/paymentRedirect/paymentRedirect';
import SelectDate from './pages/bookAppointment/selectDate/selectDate';
import Details from './pages/bookAppointment/details/details';
import Payment from './pages/bookAppointment/payment/payment';
import Done from './pages/bookAppointment/done/done';
const Massage = lazy(() => import('./pages/massage/massage'));
const Massages = lazy(() => import('./pages/massages/massages'));
const BookAppointment = lazy(() => import('./pages/bookAppointment/bookAppointment'));
const Service = lazy(() => import('./pages/bookAppointment/service/service'));
const About = lazy(() => import('./pages/about/about'));
const Contact = lazy(() => import('./pages/contact/contact'));

function App({ mobileWidth, userInput }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    const topbar = document.querySelector('.topbar')
    window.addEventListener('resize', () => stickyScrollHandler(topbar, mobileWidth));
    window.addEventListener('scroll', () => stickyScrollHandler(topbar, mobileWidth));
  }, []);

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
            <Route path='/bookings' element={<BookAppointment />}>
              <Route path='/bookings/' element={<Service />}/>
              <Route path=':service' element={<Service />}/>
              <Route path=':service/:time' element={<SelectDate />}/>
              <Route path=':service/:time/:details' element={<Details />}/>
              <Route path=':service/:time/:details/:payment' element={<Payment />}/>
              <Route path=':service/:time/:details/:payment/:status' element={<Done />}/>
            </Route>
            <Route path='/stripe/payment-redirect' element={<PaymentRedirect />} />
            <Route path='/massage/:massageId' element={<Suspense fallback={'loading...'}><Massage /></Suspense>}/>
            <Route path='/massages' element={<Suspense fallback={'loading...'}><Massages /></Suspense>}/>
            <Route path='/about' element={<Suspense fallback={<div>loading...</div>}><About /></Suspense>}/>
            <Route path='/contact' element={<Suspense fallback={<div>loading...</div>}><Contact /></Suspense>}/>
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
