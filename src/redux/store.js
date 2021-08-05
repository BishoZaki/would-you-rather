import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

import login from "../pages/login/Reducer";
import home from "../pages/home/Reducer";

const middleWares = [thunk];

const rootReducer = combineReducers({
    login,
    home
});

export default createStore(rootReducer, {}, applyMiddleware(...middleWares));
