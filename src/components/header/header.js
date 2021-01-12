import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utill';
import {connect} from 'react-redux';
import CartIcon from '../cart_icon/cart_icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';


const Header = ({currentUser,hidden}) =>{
    return(
         <div className="header">
          <Link className="logo-container" to='\'>
            <Logo className="logo"/>
          </Link>
            <div className="options">
              <Link className="option" to="/shop">Shop</Link>
              <Link className="option" to="/contact">Contact</Link>
                {
                  currentUser?
                  <div className="option" onClick={()=>auth.signOut()}>
                    Sign Out
                    </div>
                    : 
                    <Link className="option" to='/signin' >Sign In</Link>
                }
                <CartIcon/>
          </div>
           {hidden ? null : <CartDropdown/>}
         </div>
         
    );
}

const mapStateToProps = (state) =>({
  currentUser:state.user.currentUser,
  hidden:state.cart.hidden,
})


export default connect(mapStateToProps)(Header);