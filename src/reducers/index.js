import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import userReducer from './userReducer';
import productReducer from './productReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  app: appReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
