import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

import '../node_modules/bootstrap/scss/bootstrap';

const APP = document.getElementById('app');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        APP
    );
};

render();

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/..', () => {
        const NewApp = require('./components/..').default
        render(NewApp)
    });
}