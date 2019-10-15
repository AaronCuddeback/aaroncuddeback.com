import React from 'react';
import * as Sentry from '@sentry/browser';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';
Sentry.init({
  dsn: 'https://f934348251e7423d8f91a55ed05dd7be@sentry.io/1779649'
});

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
