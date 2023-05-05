import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// Redux Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

// Stores favorites
const favoritesList = (state = [], action) => {
    if ( action.type === 'SET_FAVORITE' ) {
        return action.payload;
    } else {
        return state;
    }
}

// Store
const storeInstance = createStore(
    combineReducers(
        {
            favoritesList
        }
    ),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
