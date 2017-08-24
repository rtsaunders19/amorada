import React, { Component } from 'react';
import { Link } from 'react-router';
import bottles from '../images/bottles.jpg';
import heart from '../images/heart.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeTop">
          <div className="homeBottleContent">
            <div className="bottleWrapper">
              <img src='https://pbs.twimg.com/media/C2jZoIHUkAIM-RX.jpg' alt="tequila" />
            </div>
            <button className="tequilaButton"><Link to="/ourtequilas" activeClassName="active">OUR TEQUILAS</Link></button>
          </div>
          <div className="homePassion">
            <div className="passionContainer">
              <h1>PASSION + DESIRE</h1>
              <p>Amorada Tequila is a result of a desire to produce <br />an ultra premium tequila in a class of its own. <br />Inspired by the traditional age old methods in Jalisco Mexico,<br /> Amorada is a world class Tequila with a smooth and natural taste. <br />Using "Old World" method in creating our tequila means we do<br /> not filter our tequila after distillation. This results in a more full-<br />bodied taste and well-rounded aroma that you will find<br /> much more unique than most tequilas on the market today.</p>
              <h3>From our family to yours... <br />Put some passion in YOUR life!</h3>
            </div>
          </div>
        </div>
        <div className="homeMiddle">
          <hr className="hrleft"/>
          <div className="homeHeart col-xs-2">
            <img src={heart} alt="heart" />
          </div>
          <hr />
        </div>
        <div className="homeBottom">
          <h1>OUR STORY</h1>
          <p>To the founder of Amorada Tequila, Terray Glasman,<br /> tequila is not just another distilled spirit... it is representative of her culture;<br /> having many family gatherings with food, drinks and laughter.<br /> The Beauty of the culture that has been cultivated for many generations<br /> fascinated her to a point where she decided<br /> to make it an integral part of her life.</p>
          <p>Her journey began many years ago, when she met<br /> with several distilleries in Mexico in an attempt to find<br /> the perfect Tequila. One that would reflect the same passion she felt for it.<br /> Having finally secured a relationship with a small family own distillery<br /> whose passion matched hers, they crafted the perfect relationship that wouldresult in the ultra-premium Tequila known today as Amorada,<br /> which is made with only 100% Weber Blue Agave<br />and nothing else.</p>
          <h3>"I may not be the most interesting woman in the world but my Tequila is"<br /> -Terray Glasman, CEO of Amorada Tequila</h3>
        </div>

      </div>
    );
  };
}

export default Home;
