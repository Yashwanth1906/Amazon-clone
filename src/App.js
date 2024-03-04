import './App.css';
import Checkout from './Checkout';
import Headers from './Headers';
import Home from './Home';
import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
  //it listens for the login and logout activities
  useEffect(() =>{  // will only run when the app component loads..
    auth.onAuthStateChanged(authUser =>
      {
        console.log("The user is",authUser);
        if(authUser)
        {   //User logged inn 
            dispatch({
              type:"SET_USER",
              user:authUser,
            })
        }
        else{  //User logged out
          dispatch({
            type:"SET_USER",
            user:null,
          })
        }
      })
  },[])
  return (
    <Router>
      <div className='App'>
        
        <Routes>
          <Route path='/' element={
          <React.Fragment>
            <Headers></Headers>
            <Home></Home>
          </React.Fragment>
          }/>
          <Route path='/checkout' element={
            <React.Fragment>
              <Headers></Headers>
              <Checkout></Checkout>
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Login></Login>
            </React.Fragment>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
