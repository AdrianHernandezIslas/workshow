import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import firebase from "./firebase/firebase.config";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
