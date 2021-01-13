import SHOP_DATA from './collections';
const initialState = {
    collections:SHOP_DATA
} 

const shopReducer = (state = initialState,action)=>{
    switch(action){
        default:
            return state;
    }
}

export default shopReducer;