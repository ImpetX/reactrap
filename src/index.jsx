import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR

import Test from './components/test/Test';

const APP = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    APP
  );
};

render(Test);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/test/Test', () => {
    const NewApp = require('./components/test/Test').default
    render(NewApp)
  });
}