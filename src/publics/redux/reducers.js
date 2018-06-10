import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigators from '../navigators/RootNavigators';
import reducerSettings from '../../settings/reducerSettings';
import reducerAuth from '../../auth/reducerAuth';
import reducerOutlets from '../../outlets/reducerOutlets';
import reducerOperators from '../../operators/reducerOperators';

const reducerRouter = createNavigationReducer(RootNavigators);

const reducers = combineReducers({
  form: reducerForm,
  router: reducerRouter,
  settings: reducerSettings,
  auth: reducerAuth,
  outlets: reducerOutlets,
  operators: reducerOperators
});

export default reducers;
