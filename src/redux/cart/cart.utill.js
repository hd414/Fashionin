export const addItemToCart = (cartitem,newItem)=>{
    const exist = cartitem.find(item=>item.id===newItem.id);
   if(exist){
       return cartitem.map((item) => {
            if(item.id===newItem.id){
                return({
                    ...item,
                    quantity:item.quantity+1,
                })
            }
            else
              return item
       })
   }
   return [...cartitem,{...newItem,quantity:1}]
}