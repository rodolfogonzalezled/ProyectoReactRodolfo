import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './context/UserContext';
import { NotificationProvider } from './Notification/Notification';
import './index.css';

ReactDOM.render(
    <NotificationProvider>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </NotificationProvider>,
    document.getElementById('root')
);

reportWebVitals();
