import { applyMiddleware, compose, createStore } from "redux";
import {reducer} from "./reducer"
import logger from "redux-logger"
import thunk from "redux-thunk";
import {composeWithDevTools}from "redux-devtools-extension"
let store=createStore(reducer,applyMiddleware(logger,thunk))


export default store