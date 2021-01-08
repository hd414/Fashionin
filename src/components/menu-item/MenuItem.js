import React from 'react';
import './menuItem.scss';
const MenuItem = ({id,title,imageUrl}) =>{
    return (
    <div className="menu-item">
        <div
         className = "backgroundImg"
          style={{background:`url(${imageUrl})`,backgroundSize:"100% 100%"}}
        />
        <div className = "content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Buy Now !!</span>
        </div>                   
    </div>
    );
}

export default  MenuItem;