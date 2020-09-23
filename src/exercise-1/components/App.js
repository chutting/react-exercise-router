import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Profile from './Profile';
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <section className="main">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/about-us" component={AboutUs}></Route>
            <Route exact path="/my-profile" component={Profile}></Route>
            <Route exact path="/products/:id" component={Product}></Route>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
