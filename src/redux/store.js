import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import root_reducer from "./root_reducer";

const middleware = [logger];

const store = createStore(root_reducer,applyMiddleware(...middleware));


export default store;