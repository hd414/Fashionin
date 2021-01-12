import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import Button from '../button/button';
import "./collection_item.scss";

const CollectionItem = ({item,addItem}) =>{

  const {name,price,imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image" 
              style={{background:`url(${imageUrl})`}}
              />
             <div className="collection-footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
             </div>

             <Button onClick = {()=>{addItem(item)}} inverted>Add to Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
  return(
       {
         addItem : (item) => dispatch(addItem(item)),
       }
  );
}

export default connect(null,mapDispatchToProps)(CollectionItem);
