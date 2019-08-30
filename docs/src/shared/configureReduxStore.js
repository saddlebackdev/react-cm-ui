import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers.js';
import thunkMiddleware from 'redux-thunk';

const middlewares = [ thunkMiddleware ];
const enhancer = applyMiddleware(...middlewares);

const configureReduxStore = () => {
    return createStore(
        rootReducer,
        enhancer
    );
};

export const appReduxStore = configureReduxStore();
