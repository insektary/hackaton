import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';

const appRender = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

appRender();