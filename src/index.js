import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';

import reducers from './reducers';

reactDom.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.getElementById('root'));