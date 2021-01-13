import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Preview from '../../components/preview/preview';
import './collection-overview.scss';
import {SelectShopCollectionsAsArray} from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) =>{
    return (
        <div className="collection-overview">
             {
                       collections.map(collection=>{
                           return(
                            <div>
                               <Preview key={collection.id} title={collection.title} items={collection.items}/>
                            </div>
                           )
                       
                       })
                   }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : SelectShopCollectionsAsArray
})
export default connect(mapStateToProps)(CollectionOverview);