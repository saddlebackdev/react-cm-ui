import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers.js';

const middlewares = [thunkMiddleware];
const enhancer = applyMiddleware(...middlewares);

const configureReduxStore = () => createStore(
    rootReducer,
    enhancer,
);

export const appReduxStore = configureReduxStore();
