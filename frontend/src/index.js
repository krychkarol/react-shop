import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
