import React from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
export default function Headers() {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='headers'>
        <Link to="/">
        <div className='logo'>
            <img className='amazonlogo' src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png'/>
        </div></Link>
        <div className='searchbar'>
            <input type='text' className='search' placeholder='Search Any Prodcut'/>
        </div>
        <div className='iconcontainer'>
                <img className='searchicon' src='https://images-na.ssl-images-amazon.com/images/I/510n1ix6FHL.png'/>
        </div>
        <div className='nav'>
            <div className='nav-option'>
                <span className='firstline'>
                    Hello Guest
                </span><br/>
                <span className='secondline'>Sign in</span>
            </div>
            <div className='nav-option'>
                <span className='firstline'>
                    Returns
                </span><br/>
                <span className='secondline'>& Orders</span>
            </div>
            <div className='nav-option'>
                <span className='firstline'>
                    Your
                </span><br/>
                <span className='secondline'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className='nav-option'>
                <img className='basket' src='https://www.freeiconspng.com/uploads/shopping-cart-icon-19.png'></img>
                <span className='count'>{basket?.length}</span>
            </div></Link>
        </div>
    </div>
  )
}
