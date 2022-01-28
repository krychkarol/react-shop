import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <ScrollToTop />
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
