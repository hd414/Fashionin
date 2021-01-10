import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Route,Switch} from 'react-router-dom';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import SigninSingup from './pages/signin_signup/signin_signup';
import { auth, createUserProfile } from './firebase/firebase.utill';


class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser : null,
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth=>{

        if(userAuth){
          const userRef = await createUserProfile(userAuth);

          userRef.onSnapshot(snapshot=>{
            const newUser = {
              id:snapshot.id,
              ...snapshot.data(), 
            }
            this.setState({currentUser:newUser});
            console.log(this.state);
          })
          
        }
        else{
          this.setState({currentUser:userAuth});
        } 
         
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component = {SigninSingup}/>
        </Switch>
       
         
      </div>
    );
  }
 
}

export default App;
