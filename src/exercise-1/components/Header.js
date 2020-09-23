import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
    return <section className="header">
      <NavLink exact to='/' className="link" activeClassName="active-link">Home</NavLink>
      <NavLink exact to='/my-profile' className="link" activeClassName="active-link">My Profile</NavLink>
      <NavLink exact to='/about-us' className="link" activeClassName="active-link">About Us</NavLink>
    </section>
  }
}

export default Header;
