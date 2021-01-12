import React from 'react'
import { connect } from 'react-redux';
import './checkout.scss';
import {SelectCartItems,SelectCartItemsTotal} from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkout-item/checkout-item';


const CheckOut = ({cartItem,total}) =>{
    return (
        <div className="checkout-page">
             <div className ="checkout-header">

                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

             </div>

             <div>
                 { 

                   cartItem.map(item=><CheckOutItem key={item.id} item={item}/>)

                 }
             </div>

             <span className="total">Total : ${total}</span>
            
        </div>
    )
}



const mapStateToProps = (state) => ({

    cartItem :SelectCartItems(state),
    total : SelectCartItemsTotal(state)

});


   

export default connect(mapStateToProps)(CheckOut);