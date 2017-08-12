import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="App-header">
          <li><IndexLink to="/" activeClassName="active" className="navLink">HOME</IndexLink></li>
          <li><Link to="/ourtequilas" activeClassName="active" className="navLink">OUR TEQUILAS</Link></li>
          <li><Link to="/wheretofind" activeClassName="active" className="navLink">WHERE TO FIND</Link></li>
          <li><Link to="/ourprocess" activeClassName="active" className="navLink">OUR PROCESS</Link></li>
          <li><Link to="/events" activeClassName="active" className="navLink">EVENTS</Link></li>
          <li><Link to="/blog" activeClassName="active" className="navLink">BLOG</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
