import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import logic, { getFilmsApi } from './logic';
import test, { getQuestionApi } from './wouldyourather';

const reducer = combineReducers({
  logic,
  test,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(getQuestionApi());
store.dispatch(getFilmsApi());

export default store;
