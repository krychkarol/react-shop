import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Categories from './Components/Categories';

ReactDOM.render(
    <React.StrictMode>
        <Navbar/>
        <Slider/>
        <Categories/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
