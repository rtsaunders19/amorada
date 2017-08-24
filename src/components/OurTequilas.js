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
        <div className="blancoContainer">
          <img src="#" alt="blanco" />
          <button>VIEW BLANCO</button>
        </div>
        <div className="ourBottleHeader">
          <hr className="lineleft" />
          <div className="label col-xs-2">
            <h1>Repoado</h1>
          </div>
          <hr />
        </div>
        <div className="resposadoContainer">
          <img src="#" alt="reposado" />
          <button>VIEW REPOSADO</button>
        </div>
        <div className="ourBottleHeader">
          <hr className="lineleft" />
          <div className="label col-xs-2">
            <h1>Anejo</h1>
          </div>
          <hr />
        </div>
        <div className="anejoContainer">
          <img src="#" alt="anejo" />
          <button>VIEW ANEJO</button>
        </div>
      </div>
    );
  };
}

export default OurTequilas;
