import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import logic, { getFilmsApi } from './logic';
import test, { getFilmsApi1 } from './wouldyourather';

const reducer = combineReducers({
  logic,
  test,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getFilmsApi());
store.dispatch(getFilmsApi1());

export default store;
