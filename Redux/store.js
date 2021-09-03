import { combineReducers, createStore } from "redux";

import allProducts from './reducers/productsReducers';

// pute all the reducers we define in our store
const reducers = {
    allProducts,
};

// creat a root reducer
// put our reducers in a form that we can pass to the creat store function
const rootReducer = combineReducers(reducers);



export const configureStore = () => createStore(rootReducer);