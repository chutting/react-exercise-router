import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <section className="main">
            <Route path="/" component={Home}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
            <Route path="/my-profile" component={Profile}></Route>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
