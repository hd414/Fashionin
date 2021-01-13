import React from 'react';
import './shop.scss'
import CollectionOverview from '../../components/collection-overview/collection_overview';
import { Route, Switch } from 'react-router-dom';



const Shop = ({match}) =>{
      
    console.log(match);
        
        return(
           <div className="shop-page">
            <Switch>
                  <Route exact path = {match.path} component={CollectionOverview}/>
                 
             </Switch>  
           </div>
        );
    

};



export default Shop;