import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Redirect, Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SigninSingup from './pages/signin_signup/signin_signup';
import { auth, createUserProfile } from './firebase/firebase.utill';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {createStructuredSelector} from 'reselect';
import { SelectCurrentUser } from './redux/user/user.selector';
import CheckOut from './pages/checkout/checkout';


class App extends Component {

 

  unsubscribeFromAuth = null;
  
  componentDidMount(){

   const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

        if(userAuth){
          const userRef = await createUserProfile(userAuth);

          userRef.onSnapshot(snapshot=>{
            const newUser = {
              id:snapshot.id,
              ...snapshot.data(), 
            }
           setCurrentUser(newUser);
          })
          
        }
        else{
         setCurrentUser(userAuth);
        } 
         
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkout" component = {CheckOut}/>
          <Route exact path="/signin" render = { () => this.props.currentUser ? <Redirect to='/'/> : <SigninSingup/>}/>
        </Switch>
       
         
      </div>
    );
  }
 
}

const mapStateToProps = createStructuredSelector({
    currentUser : SelectCurrentUser,
});

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
