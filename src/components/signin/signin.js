import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utill';
import Button from '../button/button';
import FormInput from '../forminput/formInput';
import './signin.scss';



class SignIn extends React.Component{
    
     constructor(){
         super()

         this.state={
             email:'',
             password:'',
         }
     }
 
    HandleSubmit = async (event) =>{
        event.preventDefault();
        const {email,password} = this.state;
   
         try{
             await auth.signInWithEmailAndPassword(email,password);
             this.setState({email:'',password:''});
         }
         catch(err){
             console.log(err);
         }
       
    }
    
    HandleChange = (event) =>{
        const {value,name} = event.target;
       this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>i have a account</h2>
                <span>
                    sign with your email and password
                </span>
                <form onSubmit={this.HandleSubmit}>
                    
                    <FormInput
                    HandeleChange={this.HandleChange} 
                    type="email" 
                    name='email'
                    required 
                    value={this.state.email}
                    label="email"
                    />
                   
                   
                    <FormInput 
                    HandeleChange={this.HandleChange} 
                    type="password" 
                    required
                    name='password'
                    label="password"
                    value={this.state.password}
                     />
                    
                    <div className="button">
                        <Button type="submit" value="submit form">Sign In</Button>
                        <Button onClick = {signInWithGoogle} googleSignin>Sign In With Google</Button>
                    </div>
                    
                </form>
            </div>
        );
    }
  
}

export default SignIn;