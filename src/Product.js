import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
export default function Product({id,desc,price,image,star}) {
  const [{basket},dispatch] = useStateValue();
  const addToCart=()=>{
      //dispatch the item into the data layer
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id:id,
          desc:desc,
          price:price,
          image:image,
          star:star,
        }
      })
  }
  return (
    <div className='product'>
        <div className='product_info'>
            <p className='desc'>{desc}</p>
            <p className='price'>
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className='star'>
              {Array(star).fill().map((_,i)=>(<p>⭐</p>))}
            </div>
        </div>
        <img className='product_image' src={image}></img>
        <button className='buy_button' onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
