import React from 'react';
import './cartItem.scss';


const CartItem = ({cartItem:{imageUrl,name,price,quantity}}) =>{
     return (
          <div className="cart-item">
              <img src={imageUrl} alt="cart-item"/>
               <div className="item-detail">
                  <span className="name">{name}</span>
                  <span className="price">{quantity} X ${price}</span>
               </div>
          </div>
     );
}

export default CartItem;