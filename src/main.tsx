import React from 'react';
import './index.css'
import  ReactDOM  from 'react-dom/client';
import { App } from './App';
import {BrowserRouter} from 'react-router-dom'
// Safely get the root element and render the MainLayout component

  const rootelement=document.getElementById("root")!;
  const root = ReactDOM.createRoot(rootelement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      
    
  </React.StrictMode>
    
);

