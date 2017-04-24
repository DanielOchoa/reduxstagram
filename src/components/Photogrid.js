import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photogrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        I'm the photo grid
        <br/>
        <Link to="/photo/1">go to photo</Link>
      </div>
    );
  }
}

export default Photogrid;
