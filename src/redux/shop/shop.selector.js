import {createSelector} from 'reselect';

const SelectShop = state =>state.shop;

export const SelectShopCollections = createSelector(
   [SelectShop],
   shop => shop.collections,
)

export const SelectShopCollectionsAsArray = createSelector(
   [SelectShopCollections],
   collections => Object.keys(collections).map(key=>collections[key]),
)

export const SelectCollection = param => 
createSelector(
   [SelectShopCollections],
   collections => collections[param]
   
);