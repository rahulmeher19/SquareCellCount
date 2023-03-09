import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import ExampleOne from './ExampleOne';
import ExampleTwo from './ExampleTwo';
import ExampleThree from './ExampleThree';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ExampleOne />
    <ExampleTwo />
    <ExampleThree />
  </React.StrictMode>
);

reportWebVitals();
