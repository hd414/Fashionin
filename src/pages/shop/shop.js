import React from 'react';
import SHOP_DATA from './collections';
import './shop.scss'
import Preview from '../../components/preview/preview';

class Shop extends React.Component{
    
    constructor(){
        super()

        this.state={
           collections:SHOP_DATA
        }
    }

    render(){
        
        return(
           <div className="">
               
                   {
                       this.state.collections.map(collection=>{
                           return(
                            <div>
                               <Preview key={collection.id} title={collection.title} items={collection.items}/>
                            </div>
                           )
                       
                       })
                   }
               
           </div>
        );
    }

};


export default Shop;