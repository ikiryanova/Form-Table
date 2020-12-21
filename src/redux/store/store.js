import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import tableReducer from '../reducers/table';

let reducers = combineReducers({
  table: tableReducer,
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
