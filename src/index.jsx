import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from 'app';
import {store} from 'store';

const appRender = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        // eslint-disable-next-line
    document.getElementById('root')
    );
};

appRender();
