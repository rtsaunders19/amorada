import React, { Component } from 'react';
import heart from '../images/heart.png';
import './OurProcess.css';

class OurProcess extends Component {
  render() {
    return (
      <div className="processContainer">
      <div className="heartHeader">
        <hr className="heartHrLeft"/>
        <div className="heartImg col-xs-2">
          <img src={heart} alt="heart" />
        </div>
        <hr />
      </div>
      <div className="ourHeaderContainer">
        <h1>OUR PROCESS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="ourProcessHead">
        <hr className="lineleft" />
        <div className="label col-xs-2">
          <h1>Aging</h1>
        </div>
        <hr />
      </div>
      <div className="processText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="ourProcessHead">
        <hr className="lineleft" />
        <div className="label col-xs-2">
          <h1>Distillation</h1>
        </div>
        <hr />
      </div>
      <div className="processText last">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
    );
  };
}

export default OurProcess;
