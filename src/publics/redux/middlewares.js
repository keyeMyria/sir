import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';

const middlewares = [];

// middleware react navigation
const reactNavigation = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
);
middlewares.push(reactNavigation);

// middleware redux promise
const promise = promiseMiddleware();
middlewares.push(promise);

// middlewares logger
const logger = createLogger();
middlewares.push(logger);

// middleware for thunk
middlewares.push(thunk);

export default middlewares;
