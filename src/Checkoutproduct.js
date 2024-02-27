import React from 'react';
import "./Checkoutproduct.css";
import { useStateValue } from './StateProvider';

export default function Checkoutproduct({id, image, title, price, star}) {
  console.log(image, title, price, star);
  const [{basket},dispatch] = useStateValue();
  const removefrombasket = ()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className='Checkoutproduct'>
        <img src={image} className='productimage' alt="Product"></img>
        <div className='CheckOutProduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'><small>Rs.</small><strong>{price}</strong></p>
            <div className='checkoutproduct_star'>{Array(star).fill().map((_, i) => (<p key={i}>⭐</p>))}</div>
            <button className='remove' onClick={removefrombasket}>Remove from cart</button>
        </div>
    </div>
  )
}
