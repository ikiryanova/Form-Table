import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import tableReduser from '../table-reduser';

let redusers = combineReducers({
  table: tableReduser,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
