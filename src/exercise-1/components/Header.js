import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return <section className="header">
      <Link to='/' className="link">Home</Link>
      <Link to='/my-profile' className="link">My Profile</Link>
      <Link to='/about-us' className="link">About Us</Link>
    </section>
  }
}

export default Header;
