import React from 'react';
import  './cart_icon.scss';
import {ReactComponent as Bag} from '../../assets/bag.svg';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden}) =>(
    <div onClick={toggleCartHidden} className="cart-icon">
      <Bag className="shopping-icon"/>
      <span className="item-count">
          0
      </span>
    </div>
)



const mapDispatchToProps = dispatch =>(
  {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
)

export default connect(null,mapDispatchToProps)(CartIcon) ;