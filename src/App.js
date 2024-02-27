import './App.css';
import Checkout from './Checkout';
import Headers from './Headers';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
function App() {
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
