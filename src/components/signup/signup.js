import React from 'react'
import { auth, createUserProfile } from '../../firebase/firebase.utill';
import Button from '../button/button';
import FormInput from '../forminput/formInput';
import './signup.scss';

class SignUp extends React.Component{

    constructor(){
        super();

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPass:'',
        }
    }

    HandleSubmit = async (event) =>{
            event.preventDefault();
            const {displayName,email,password,confirmPass} = this.state;
            
            if(password!==confirmPass)
              {
                  alert("password don't match");
                  return;
              }

              try{
                  const {user} = await auth.createUserWithEmailAndPassword(email,password);
             
                  await createUserProfile(user,{displayName});
 
                  this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPass:'',
                  })
              }
              catch(error){
                 console.log(error);
              }
    };

    HandleChange = (event) =>{
          const {name,value} = event.target;
          this.setState({[name]:value});
    }

    render() {

         const {displayName,email,password,confirmPass} = this.state;

        return (
            <div className="sign-up">
                <h2 className="title">Register Here</h2>
                <span>Sign up with your email</span>
                 
                 <form className="sign-up-form" onSubmit={this.HandleSubmit}>
                    <FormInput type="text" 
                    name="displayName"
                    value={displayName}
                    onChange={this.HandleChange}
                    label="Display Name"
                    required 
                    />
                    <FormInput type="email" 
                    name="email"
                    value={email}
                    onChange={this.HandleChange}
                    label="email"
                    required 
                    />
                    <FormInput type="password" 
                    name="password"
                    value={password}
                    onChange={this.HandleChange}
                    label="password"
                    required
                     />
                    <FormInput type="password" 
                    name="confirmPass"
                    value={confirmPass}
                    onChange={this.HandleChange}
                    label="confirm-password"
                    required 
                    />
                 
                 <Button type="submit" value="submit form">Sign Up</Button>

                 </form>
            </div>
        )
    }

}


export default SignUp;