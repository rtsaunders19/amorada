import React, { Component } from 'react';
import Header from './components/common/Header';
import { Link, IndexLink } from 'react-router';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state= {
        nav: 0
      };
    };

    closeNav() {
      this.setState({
        nav: 0
      })
    }

    openNav() {
      this.setState({
        nav: 100
      })
    }

  render() {
    let style = {
      width: this.state.nav + '%'
    };
    return (
      <div className="App">
        <div id="mySidenav" className="sidenav" style={style}>
	         <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
           <IndexLink to="/" activeClassName="active" className="navLink" onClick={this.closeNav.bind(this)}>HOME</IndexLink>
	         <Link to="/wheretofind" activeClassName="active" className="navLink" onClick={this.closeNav.bind(this)}>WHERE TO FIND</Link>
	         <Link to="/ourprocess" activeClassName="active" className="navLink" onClick={this.closeNav.bind(this)}>OUR PROCESS</Link>
	         <Link to="/events" activeClassName="active" className="navLink" onClick={this.closeNav.bind(this)}>EVENTS</Link>
	         <Link to="/blog" activeClassName="active" className="navLink" onClick={this.closeNav.bind(this)}>BLOG</Link>
  	    </div>
      <Header openNav={this.openNav.bind(this)}/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
