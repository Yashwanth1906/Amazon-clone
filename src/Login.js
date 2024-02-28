import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import { auth } from './firebase';
export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const sigin =e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                window.location.href = "/";
    })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                // Auth is the auth object thrown after creating an account successfully
                if(auth)
                {
                    window.location.href = "/";
                }
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className='Login'>
        <Link to="/"><img src='https://logospng.org/download/amazon/logo-amazon-1536.png' className='Loginimage'></img></Link>
        <div className='LoginContainer'>
            <h1>Sign-in</h1>
            <h5>E-Mail</h5><input placeholder='Enter the E-Mail' type='text' className='Email' value={email} onChange={e=>setEmail(e.target.value)}></input>
            <h5>Password</h5><input placeholder='Enter the Password' type='password' className='Password' value={password} onChange={e=>setPassword(e.target.value)}></input>
            <button className='Sigin' onClick={sigin} >Sign-In</button>
            <p>Are you new to Amazon?</p>
        <button className='register' onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>
  )
}
