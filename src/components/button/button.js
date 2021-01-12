import React from 'react';
import './button.scss';

const Button = ({googleSignin,inverted,children,...others}) =>{
    return(
        <button className={`${googleSignin?'google':''}
        ${inverted?'inverted':''}
         custom-button`} 
         {...others}>
          {children}
       </button>
  
    );
    
}


export default Button;