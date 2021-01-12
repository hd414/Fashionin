import React from 'react'
import { connect } from 'react-redux';
import { ClearItem, subtractItem,addItem } from '../../redux/cart/cart.action';
import './checkout-item.scss';


const CheckOutItem = ({item,ClearItem,RemoveItem,AddItem}) =>{
    const {name,imageUrl,quantity,price} = item;
    return(
       <div className="checkout-item">
           <div className ="image-container">
               <img src={imageUrl} alt="item"/>
           </div>
           <span className="name">{name}</span>
           <span className="quantity">
               <div className="arrow" onClick={()=>RemoveItem(item)}>&#10094;</div>
               <span className="value">{quantity}</span>  
               <div className="arrow" onClick={()=>AddItem(item)}>&#10095;</div>
               </span>
           <span className="price">{price}</span>
           <span className="remove-button" onClick={()=>ClearItem(item)}>&#10006;</span>
       </div>
    );
}

const mapDispatchToProps = dispatch =>{
    return({
        ClearItem : (item) => dispatch(ClearItem(item)),
        RemoveItem :(item) => dispatch(subtractItem(item)),
        AddItem : (item) => dispatch(addItem(item)),
    })
}

export default connect(null,mapDispatchToProps)(CheckOutItem) ;