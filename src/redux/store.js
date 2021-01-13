import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import root_reducer from "./root_reducer";
import {persistStore} from 'redux-persist';

const middleware = [logger];

export const store = createStore(root_reducer,applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default {store,persistor};