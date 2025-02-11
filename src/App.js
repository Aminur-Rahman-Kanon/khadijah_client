import React, { useEffect, lazy, Suspense, useState } from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import AdditionalTopbar from './components/additionalTopbar/additionalTopbar';
import Loader from './components/loader/loader';
import { connect } from 'react-redux';
import Sidedrawer from './components/sidedrawer/sidedrawer';
import Footer from './components/footer/footer';
import { ToastContainer, Bounce } from 'react-toastify';

//lazy import
const PaymentRedirect = lazy(() => import('./pages/bookAppointment/paymentRedirect/paymentRedirect'));
const SelectDate = lazy(() => import('./pages/bookAppointment/selectDate/selectDate'));
const Details = lazy(() => import('./pages/bookAppointment/details/details'));
const Payment = lazy(() => import('./pages/bookAppointment/payment/payment'));
const Done = lazy(() => import('./pages/bookAppointment/done/done'));
const Massage = lazy(() => import('./pages/massage/massage'));
const Massages = lazy(() => import('./pages/massages/massages'));
const BookAppointment = lazy(() => import('./pages/bookAppointment/bookAppointment'));
const Service = lazy(() => import('./pages/bookAppointment/service/service'));
const About = lazy(() => import('./pages/about/about'));
const Contact = lazy(() => import('./pages/contact/contact'));

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const SuspenseModule = ({ children }) => <Suspense fallback={<Loader />}>
    {children}
  </Suspense>

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
              <Route path=':service/:time' element={<Suspense fallback={<Loader />}>
                <SelectDate />
              </Suspense>}/>
              <Route path=':service/:time/:details' element={<SuspenseModule><Details /></SuspenseModule>}/>
              <Route path=':service/:time/:details/:payment' element={<SuspenseModule><Payment /></SuspenseModule>}/>
              <Route path=':service/:time/:details/:payment/:status' element={<SuspenseModule><Done /></SuspenseModule>}/>
            </Route>
            <Route path='/stripe/payment-redirect' element={<SuspenseModule><PaymentRedirect /></SuspenseModule>} />
            <Route path='/massage/:massageId' element={<SuspenseModule><Massage /></SuspenseModule>}/>
            <Route path='/massages' element={<SuspenseModule><Massages /></SuspenseModule>}/>
            <Route path='/about' element={<SuspenseModule><About /></SuspenseModule>}/>
            <Route path='/contact' element={<SuspenseModule><Contact /></SuspenseModule>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
