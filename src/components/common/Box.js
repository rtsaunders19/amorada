import React, { Component } from 'react';
import '../WhereToFind.css';

class Box extends Component {
  constructor(props) {
    super(props);
  }

buttonOrForm() {
  if (this.props.button) {
    return <button>{this.props.buttonText}</button>
  }
    return (
      <form>
        <input type="text" placeholder={this.props.placeholder}/>
      </form>
    )
}

render() {
  let boxContainerStyle = {
    width: '15rem',
    height: '10em',
    backgroundColor: '#c0c0c0',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '3.5em',
    borderRadius: '2.5px',
    border: '1px black solid'
  }
  let headerStyle = {
    marginTop: '0.9em',
    fontSize: '12px'
  }
  let line = {
    width: '20%',
    float: 'left',
    marginTop: '15px'
  }
  return (
  <div style={boxContainerStyle}>
    <p style={headerStyle}>{this.props.header}</p>
      <div className="iconMiddle col-xs-12">
        <hr style={line} className="leftLine"/>
        <div className="icon col-xs-2">
          <img src={this.props.image} alt="img" />
        </div>
        <hr style={line} />
      </div>
     <div className="nearForm">
        {this.buttonOrForm()}
     </div>
  </div>
  )
}
}

export default Box;
