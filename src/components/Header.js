import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';


class Header extends Component {

  render() {
    return (
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>
    );
  }
}

export default Header;
