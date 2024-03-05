
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseContext } from './store/Context';
import Context from './store/Context';
import App from './App';
import { FirebaseApp } from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContext.Provider value={{ FirebaseApp }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
);
