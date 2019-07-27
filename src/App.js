import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Modal from './components/Modal';

function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/cart' component={Cart}/>
      <Route component={Default}/>
      </Switch>
      <Modal/>
    </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
