import React from 'react';
import ReactDOM from 'react-dom';

class YouTubeDebugger extends React.Component {
  constructor() {
     super();
     this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
      }
   }

   handleClickBit() {
     this.setState({
        settings: Object.assign({}, this.state.settings, {
            bitrate: 12
          }
          )})}

  handleClickRes() {
    this.setState({
       settings: Object.assign({}, this.state.settings,
         {
           video: {
             resolution: '720p'
           }})})}

   render() {
     return (
       <div>
         <button className='bitrate' onClick={this.handleClickBit.bind(this)}>bitrate!</button>
         <button className='resolution' onClick={this.handleClickRes.bind(this)}>resolution!</button>
      </div>
     )}}

module.exports = YouTubeDebugger
