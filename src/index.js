import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  payment_method_configuration: 'pmc_1QmR55Fktu5Lttz3Kve6M9QL',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};


root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Elements stripe={stripe} options={options}>
          <App />
        </Elements>
      </Provider>
    </BrowserRouter>
);

