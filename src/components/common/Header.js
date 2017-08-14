import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
      <ul className="App-header">
        <li><IndexLink to="/" activeClassName="active" className="navLink">HOME</IndexLink></li>
        <li className="side-link"><Link to="/ourtequilas" activeClassName="active" className="navLink">OUR TEQUILAS</Link></li>
        <li className="side-link"><Link to="/wheretofind" activeClassName="active" className="navLink">WHERE TO FIND</Link></li>
        <li className="side-link"><Link to="/ourprocess" activeClassName="active" className="navLink">OUR PROCESS</Link></li>
        <li className="side-link"><Link to="/events" activeClassName="active" className="navLink">EVENTS</Link></li>
        <li className="side-link"><Link to="/blog" activeClassName="active" className="navLink">BLOG</Link></li>
     </ul>

    );
  };

export default Header;
