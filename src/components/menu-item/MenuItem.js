import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss';
const MenuItem = ({title,imageUrl,linkUrl,history,match}) =>{
    return (
    <div className="menu-item" onClick={
        () =>{
            history.push(`${match.url}${linkUrl}`)
        }
    }>
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

export default  withRouter(MenuItem) ;