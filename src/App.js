import './App.css';
import Checkout from './Checkout';
import Headers from './Headers';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Headers></Headers>
        <Routes>
          <Route path='/' element={
          <React.Fragment>
            
            <Home></Home>
          </React.Fragment>
          }/>
          <Route path='/checkout' element={
            <React.Fragment>
              <Checkout></Checkout>
            </React.Fragment>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
