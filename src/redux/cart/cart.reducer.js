import { addItemToCart } from "./cart.utill";

const initialState = {
    hidden:true,
    cartItem:[],
}

const cartReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden:!state.hidden,
            };
        case 'ADD_ITEM':
            
            return{
                ...state,
                cartItem:addItemToCart(state.cartItem,action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer; 