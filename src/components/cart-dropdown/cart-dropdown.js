import React from 'react'
import { connect } from 'react-redux';
import Button from '../button/button';
import CartItem from '../cartItem/cartItem';
import './cart-dropdown.scss';
import {createStructuredSelector} from 'reselect';
import { SelectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems,history,dispatch}) =>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
              
              {
                cartItems.length ?

            (
                cartItems.map((cartItem)=>{
                    return (<CartItem id={cartItem.id} cartItem={cartItem}/>)
                })
             )

              :
              <span className="empty-msg"> Cart is empty </span>

            }
             
             </div>
            <Button onClick={()=>{
                dispatch(toggleCartHidden());
            history.push('/checkout')
            }} className="custom-button">Go to CheckOut page</Button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems:SelectCartItems,
}) 

export default withRouter(connect(mapStateToProps)(CartDropdown));