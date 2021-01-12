import React from 'react';
import  './cart_icon.scss';
import {ReactComponent as Bag} from '../../assets/bag.svg';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { SelectCartItemsCount } from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div onClick={toggleCartHidden} className="cart-icon">
      <Bag className="shopping-icon"/>
      <span className="item-count">
          {itemCount}
      </span>
    </div>
)



const mapDispatchToProps = dispatch =>(
  {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
)

const mapStateToProps = createStructuredSelector({
  
      
        itemCount : SelectCartItemsCount
      
  
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) ;