import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Header';
import About from './About';
import Item from './Item';
import Homepage from './Home';
import Merchant from './Merchant';
import Seller from './Seller';

function App(props) {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <Homepage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/merchants/:sellerId" children={<Seller />}>
        </Route>
        <Route exact path="/merchants">
          <Merchant />
        </Route>
        <Route path="/fruits/:fruitName" children={<Item />}>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
