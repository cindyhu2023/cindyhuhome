import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import $ from 'jquery';
const firebaseConfig = {
  apiKey: "AIzaSyBftcPFmCyOY6TAcO6oNsXaY9yqIReqkr8",
  authDomain: "cindyhuhome.firebaseapp.com",
  projectId: "cindyhuhome",
  storageBucket: "cindyhuhome.appspot.com",
  messagingSenderId: "48789224943",
  appId: "1:48789224943:web:a71164ef162c23c86b8a1a",
  measurementId: "G-M62L530DS7"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);