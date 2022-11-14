import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter basename='/'>
        <App />
    </BrowserRouter>
);

reportWebVitals();