import CartItem from "../../components/cartItem/cartItem";

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


export const RemoveItems = (cartitem,ditem)=>{
    const exist = cartitem.find(item=>item.id===ditem.id);

    if(ditem.quantity===1){
        return cartitem.filter(cartitem=> cartitem.id!==ditem.id)
    }

    if(exist){
        return cartitem.map((item) => {
            if(item.id===ditem.id){
                return({
                    ...item,
                    quantity:item.quantity-1,
                })
            }
            else
              return item
       })
    }

    return [...cartitem];
}