
import {createSelector} from 'reselect';

const SelectCart = (state) => state.cart;


export const SelectCartItems = createSelector(
    [SelectCart],
    (cart) => cart.cartItem
);

export const SelectCartHidden = createSelector(
    [SelectCart],
    (cart) => cart.hidden
);

export const SelectCartItemsCount = createSelector(
    [SelectCartItems],
    (cartItem) => cartItem.reduce(
        (acc,cartItem) =>
        acc =  acc+cartItem.quantity
        ,0
    )
); 

export const SelectCartItemsTotal = createSelector(
    [SelectCartItems],
    (cartItem) => cartItem.reduce(
        (acc,cartItem) =>
        acc =  acc+cartItem.quantity*cartItem.price
        ,0
    )
)

