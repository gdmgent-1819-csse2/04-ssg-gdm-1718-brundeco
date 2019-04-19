import React, { Component } from 'react';

const containerStyle = {
  height: 150,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const wrapperStyle = {
  width: '80%',
  borderTop: '1px solid lightgrey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const textStyle = {
  marginBottom: 10,
};

const subTextStyle = {
  color: 'grey',
  fontSize: '85%',
  marginTop: 10,
};

export class Footer extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={wrapperStyle} className="wrapper">
          <p style={textStyle}>CSSE assignment 04 - Static Site Generator</p>
          <p style={subTextStyle}>© De Coene Bruno, 2019</p>
        </div>
      </div>
    );
  }
}

export default Footer;
