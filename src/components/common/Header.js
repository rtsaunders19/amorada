import React from 'react';
import { Link, IndexLink } from 'react-router';
import hamburger_icon from '../../images/hamburger_icon.png';
import './Header.css';

const Header = () => {
    return (
      <ul className="App-header">
        <li className="homeLink"><IndexLink to="/" activeClassName="active" className="navLink">HOME</IndexLink></li>
        <li className="sideLink"><Link to="/ourtequilas" activeClassName="active" className="navLink">OUR TEQUILAS</Link></li>
        <li className="sideLink"><Link to="/wheretofind" activeClassName="active" className="navLink">WHERE TO FIND</Link></li>
        <li className="sideLink"><Link to="/ourprocess" activeClassName="active" className="navLink">OUR PROCESS</Link></li>
        <li className="sideLink"><Link to="/events" activeClassName="active" className="navLink">EVENTS</Link></li>
        <li className="sideLink"><Link to="/blog" activeClassName="active" className="navLink">BLOG</Link></li>
        <li className="hamburger"><img src={hamburger_icon} alt="-" /></li>
     </ul>

    );
  };

export default Header;
