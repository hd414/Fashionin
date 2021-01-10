import React from 'react'
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';
import './signin_signup.scss';


const SigninSingup = () =>{
   return(
     <div className="sign-in-and-sign-up">
         <SignIn/>
         <SignUp/>
     </div>
    
   );
} 

export default SigninSingup;