import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
export default function Subtotal(value) {
    console.log(value);
    const [{basket},dispatch] = useStateValue();
    let x = basket.length;
    let amount = 0;
    for(let i=0;i<x;i++)
    {
        amount+=basket[i].price;
    }
  return (
    <div className='Subtotal'>
        <CurrencyFormat
            renderText={(value)=>
            (
                <>
                    <p>
                        Subtotal ({x} items): <strong>₹{amount}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox'/>This order contains gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={amount}
            displayType={"text"}
            thousandSeparator = {true}
            prefix={"$"}
        />
        <button className='subtotal_button' onClick={e=> window.location.href = "/payment"}>Proceed to Checkout</button>
    </div>
  )
}
