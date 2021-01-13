import React from 'react';
import { connect } from 'react-redux';
import './collection.scss';
import {SelectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection_item/collection_item';

const CollectionPage = ({collections}) =>{
    console.log(collections);
      const {title,items} = collections;
    return(
        <div className="collection-page">
            <h2 className ="title">{title}</h2>
            <div className="items">
                 {
                   items.map(item=>(
                     <CollectionItem item={item}/>
                   ))
                 }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>({

   collections:SelectCollection(ownProps.match.params.collectionid)(state),

})

export default connect(mapStateToProps)(CollectionPage);
