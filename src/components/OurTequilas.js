import React, { Component } from 'react';
import './OurTequilas.css'

class OurTequilas extends Component {
  render() {
    return (
      <div className="ourTequilasContainer">
        <div className="ourHeader">
          <h1>OUR TEQUILAS</h1>
        </div>
        <div className="ourBottleHeader">
          <hr className="lineleft" />
          <div className="label col-xs-2">
            <h1>Blanco</h1>
          </div>
          <hr />
        </div>
        <div className="tequilaContainer">
          <img src="http://amoradatequila.com/wp-content/uploads/2017/05/blanco.png" alt="blanco" />
          <button>VIEW BLANCO</button>
        </div>
        <div className="ourBottleHeader">
          <hr className="lineleft" />
          <div className="label col-xs-2">
            <h1>Reposado</h1>
          </div>
          <hr />
        </div>
        <div className="middleContainer">
          <button>VIEW REPOSADO</button>
          <img src="http://amoradatequila.com/wp-content/uploads/2017/05/blanco.png" alt="reposado" />
        </div>
        <div className="ourBottleHeader">
          <hr className="lineleft" />
          <div className="label col-xs-2">
            <h1>Anejo</h1>
          </div>
          <hr />
        </div>
        <div className="bottomContainer">
          <img src="http://amoradatequila.com/wp-content/uploads/2017/05/blanco.png" alt="anejo" />
          <button>VIEW ANEJO</button>
        </div>
      </div>
    );
  };
}

export default OurTequilas;
