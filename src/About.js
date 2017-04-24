import React from 'react';

const About = ({ match }) => (
  <div className='about'>
    <h1>About {match.params.personId}</h1>
    <p>I'm a little teapot short and stout...</p>
  </div>
)

export default About;
