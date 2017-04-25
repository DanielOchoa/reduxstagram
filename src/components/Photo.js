import React, { Component } from 'react';

class Photo extends Component {

  render() {
    return (
      <div className="single-photo">
        Id for photo: {this.props.match.params.photoId}
      </div>
    );
  }
}

export default Photo;
// example of simple fn
/*
const Photo = ({ match }) => (
  <div className="single-photo">
    Id for photo: {match.params.photoId}
  </div>
);
*/
