import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider'; // Fix typo here
import Checkoutproduct from './Checkoutproduct';

export default function Checkout() {
  const [{basket}, dispatch] = useStateValue(); // Fix typo here
  
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <div>
                <h2 className='title'>Your Shopping Cart</h2>
            </div>
            {basket.map(item =>(
                <Checkoutproduct key={item.id} id={item.id} image={item.image} price={item.price} title={item.desc} star={item.star}></Checkoutproduct> // Added key prop
            ))}
        </div>
        <div className='checkout_right'>
            <Subtotal></Subtotal>
        </div>
    </div>
  )
}
