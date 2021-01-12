import React from 'react'
import { connect } from 'react-redux';
import Button from '../button/button';
import CartItem from '../cartItem/cartItem';
import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) =>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
              
              {
                cartItems.map((cartItem)=>{
                    return (<CartItem id={cartItem.id} cartItem={cartItem}/>)
                })
              }
             
             </div>
            <Button className="custom-button">Go to CheckOut page</Button>
        </div>
    );
}

const mapStoreToProps = (state) =>({
    cartItems:state.cart.cartItem,
}) 

export default connect(mapStoreToProps)(CartDropdown);