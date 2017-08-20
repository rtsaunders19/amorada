import React, { Component } from 'react';
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
          <div className="nearYou">
            <p>NEAR YOU</p>
            <div className="iconMiddle col-xs-12">
              <div className="leftBox col-xs-5">
                <div></div>
              </div>
              <div className="icon col-xs-2">
                <img src={heart} alt="heart" />
              </div>
              <div className="rightBox col-xs-5">
                <div></div>
              </div>
            </div>
            <div className="nearForm">
              <form>
                <input type="text" />
              </form>
            </div>
          </div>
          <div className="events">

          </div>
          <div className="login">

          </div>
        </div>
      </div>
    );
  };
}

export default WhereToFind;
