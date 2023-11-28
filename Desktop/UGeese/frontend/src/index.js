import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SettingsContextProvider from './context/settingsContext';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </BrowserRouter>
);