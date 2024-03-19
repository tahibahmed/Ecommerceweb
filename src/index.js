import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from './global/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* app name */}
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Provider store={store}></Provider>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);