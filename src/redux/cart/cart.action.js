export const toggleCartHidden = () =>({
    type : 'TOGGLE_CART_HIDDEN',
}) 

export const addItem = (item) =>{
   return(
      {
          type:'ADD_ITEM',
          payload:item,
      }
   );
}

export const subtractItem = (item) =>{
    return(
       {
           type:'SUBTRACT_ITEM',
           payload:item,
       }
    );
 }

 export const ClearItem = (item) =>{
    return(
       {
           type:'CLEAR_ITEM',
           payload:item,
       }
    );
 }