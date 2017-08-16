import React, { Component } from 'react';
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
              <img src={bottles} alt="tequila" />
            </div>
            <button className="tequilaButton">OUR TEQUILAS</button>
          </div>
          <div className="homePassion">
            <div className="passionContainer">
              <h1>PASSION + DESIRE</h1>
              <p>Amorada Tequila is a result of a desire to produce <br />an ultra premium tequila in a class of its own. <br />Inspired by the traditional age old methods in Jalisco Mexico,<br /> Amorada is a world class Tequila with a smooth and natural taste. <br />Using "Old World" method in creating our tequila means we do<br /> not filter our tequila after distillation. This results in a more full-<br />bodied taste and well-rounded aroma that you will find<br /> much more unique than most tequilas on the market today.</p>
              <h3>From our family to yours... <br />Put some passion in YOUR life!</h3>
            </div>
          </div>
        </div>
        <div className="homeMiddle col-xs-12">
          <div className="leftBox col-xs-5"></div>
          <div className="homeHeart col-xs-2">
            <img src={heart} alt="heart" />
          </div>
          <div className="rightBox col-xs-5"></div>
        </div>
        <div className="homeBottom">
          <h1>OUR STORY</h1>
          <p>To the founder of Amorada Tequila, Terray Glasman, tequila is not just another distilled spirit... it is<br /> representative of her culture; having many family gatherings with food, drinks and laughter. The Beauty of the<br /> culture that has been cultivated for many generations fascinated her to a point where she decided to make it an<br /> integral part of her life.</p>
          <p>Her journey began many years ago, when she met with several distilleries in Mexico in an attempt to find the<br /> perfect Tequila. One that would reflect the same passion she felt for it. Having finally secured a relationship with a small family own distillery whose passion matched hers, they crafted the perfect relationship that would<br />result in the ultra-premium Tequila known today as Amorada, which is made with only 100% Weber Blue Agave<br />and nothing else.</p>
          <h3>"I may not be the most interesting woman in the world but my Tequila is"<br /> -Terray Glasman, CEO of Amorada Tequila</h3>
        </div>

      </div>
    );
  };
}

export default Home;
