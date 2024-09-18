import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import TagManager from 'react-gtm-module';



// Initialize GTM
const tagManagerArgs = {
  gtmId: 'GTM-P6QMKH3Z', // Replace with your GTM ID
 
};

TagManager.initialize(tagManagerArgs);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,

    <BrowserRouter>
      <Router />
    </BrowserRouter>

)
