import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutbutton = ({price}) =>{
    const priceforstripe = price*100;
    const publishableKey = 'pk_test_51I97xqAnjF32VEy7QxH5U0wVcPzj09yf5a0iDujZj4tidndAJqzVlhNK9Tl1K5HQmDwyjXsMLcSBHOTnmZcXFlW300fy6IUI1f';
    
    const OnToken= (token)=>{
        alert("payment successfull");
        console.log(token);
    }
    return (
       <StripeCheckout
       
       label="pay Now"
       name = "Myntra.in"
       billingAddress
       shippingAddress
       image='https://img.icons8.com/clouds/2x/mac-os.png'
       description={`Your price is $${price}`}
       amount={priceforstripe}
       panelLabel="Pay Now"
       token={OnToken}
       stripeKey={publishableKey}
       />
    );
}

export default StripeCheckoutbutton;