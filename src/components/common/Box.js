import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
  }

buttonOrForm() {
  if (this.props.button) {
    return <button style={{
      height: '20px',
      width: '59%',
      fontSize: '10px',
      border: '1px black solid',
      textAlign: 'center'}}>{this.props.buttonText}</button>
  }
    return (
      <form>
        <input style={{
          textAlign: 'center',
          width: '59%',
          height: '20px',
          border: '1px solid black'}} type="text" placeholder={this.props.placeholder}/>
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
  let nearForm = {
    marginTop: '4.25em'
  }
  let iconMiddle = {
    padding: '0',
    height: '30px'
  }
  let icon = {
    height: '30px',
    width: '30px'
  }
  let img = {
    height: '100%',
    width: '100%'
  }
  return (
  <div style={boxContainerStyle}>
    <p style={headerStyle}>{this.props.header}</p>
      <div style={iconMiddle} className="col-xs-12">
        <hr
          style={{
            marginLeft: '2.95rem', width: '20%',
            float: 'left',
            marginTop: '15px'}}
        />
        <div style={icon} className="col-xs-2">
          <img style={img} src={this.props.image} alt="img" />
        </div>
        <hr style={line} />
      </div>
     <div style={nearForm}>
        {this.buttonOrForm()}
     </div>
  </div>
  )
}
}

export default Box;
