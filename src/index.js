import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
