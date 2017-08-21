import React, { Component } from 'react';
import Box from './common/Box';
import heart from '../images/heart.png';
import './WhereToFind.css';

class WhereToFind extends Component {
  render() {
    return (
      <div className="whereContainer">
        <div className="headContainer">
          <h1>WHERE TO FIND</h1>
        </div>
        <div className="boxContainer">
          <Box
            header="NEAR YOU"
            button={false}
            image='https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png'
            placeholder="enter ZIP"
          />
          <Box
            header="TASTINGS & EVENTS"
            button={true}
            image='http://www.iconarchive.com/download/i97414/iconsmind/outline/Wine-Bottle.ico'
            buttonText="SEE ALL"
          />
          <Box
            header="CUSTOMER LOGIN"
            button={true}
            image='http://simpleicon.com/wp-content/uploads/Shopping-Cart-11.png'
            buttonText="LOGIN"
          />
        </div>
      </div>
    );
  };
}

export default WhereToFind;
