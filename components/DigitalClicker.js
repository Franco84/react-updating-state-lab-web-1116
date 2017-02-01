import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClicker extends React.Component {
  constructor() {
     super();
     this.state = {
       timesClicked: 0
     }
     this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
     this.setState({
       timesClicked: this.state.timesClicked += 1
     })
   }

   render() {
     return (
         <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
     )}}

module.exports = DigitalClicker;
