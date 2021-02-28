import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Order from './components/order';
import Profile from './components/profile';
import PriceCheck from './components/pricecheck';
import WineRequest from './components/winerequest';
import ShopingCart from './components/shopingcart';
import SaveData from './components/savedata';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/order" component={Order} />
          <Route path="/profile" component={Profile} />
          <Route path="/pricecheck" component={PriceCheck} />
          <Route path="/winerequest" component={WineRequest} />
          <Route path="/shopingcart" component={ShopingCart} />
          <Route path="/savedata" component={SaveData} />
        </Switch>
      </div>
    )
  }
}

export default App;