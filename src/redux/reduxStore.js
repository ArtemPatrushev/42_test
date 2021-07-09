import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';

import { authReducer } from "./reducers/authReducer";
import { postsReducer } from './reducers/postsReducer';

const reducers = combineReducers({
    postsPage: postsReducer,
    signUpPage: authReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
