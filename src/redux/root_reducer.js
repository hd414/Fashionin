import { combineReducers } from "redux";
import userReducer from "./user/user_reducer";
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import directorReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig={
  key:'root',
  storage,
  whitelist:['cart']

};

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directorReducer,
    shop:shopReducer,
});

export default persistReducer(persistConfig,rootReducer);