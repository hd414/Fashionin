import React from 'react';
import './button.scss';

const Button = ({googleSignin,children,...others}) =>{
    return(
        <button className={`${googleSignin?'google':''} custom-button`} {...others}>
          {children}
       </button>
  
    );
    
}


export default Button;