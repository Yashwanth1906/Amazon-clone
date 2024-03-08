import './App.css';
import Checkout from './Checkout';
import Headers from './Headers';
import Home from './Home';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log("The user is", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch]); // Make sure to include dispatch in dependency array

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <>
              <Headers />
              <Home />
            </>
          } />
          <Route path='/checkout' element={
            <>
              <Headers />
              <Checkout />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={
            <>
              <Headers />
              <Payment/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

