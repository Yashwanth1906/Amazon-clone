import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import Checkoutproduct from './Checkoutproduct';
import { Link } from 'react-router-dom';

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <div className='Payment'>
      <div className='PaymentContainer'>
        <h1 className='CheckoutDetails'>
          Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className='PaymentSection'>
          <div className='PaymentTitle'>
            <h3>Payment Address</h3>
          </div>
          <div className='PaymentAddress'>
            <p>{user?.email}</p>
            <p>No:118B, Arun Krishna Nagar,</p>
            <p>Veppampattu</p>
          </div>
        </div>
        <div className='PaymentSection'>
          <div className='PaymentTitle'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='PaymentItems'>
            {basket.map((item) => (
              <Checkoutproduct
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.desc}
                star={item.star}
              />
            ))}
          </div>
        </div>
        <div className='PaymentSection'>
          <div className='PaymentTitle'>
            <h3>Payment Method</h3>
          </div>
          <div className='PaymentDetails'>
          </div>
        </div>
      </div>
    </div>
  );
}
