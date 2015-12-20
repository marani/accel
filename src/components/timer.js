import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';

export default React.createClass({
  getInitialState: function() {
    return {
      duration: null,
      startTime: null
    };
  },
  // setduration: function(length) {
  //   this.setState({
  //     duration: length,
  //   });
  // },
  startCountDown: function(length) {
    var now = + new Date();
    var d = length;
    this.setState({
      startTime: now,
      duration: length
    });
    this.interval = setInterval(this.tick, 60);
  },
  tick: function() {
    var d = moment.duration(this.state.duration - (+ new Date() - this.state.startTime));
    var hours = ('0' + d.hours()).slice(-2);
    var minutes = ('0' + d.minutes()).slice(-2);
    var seconds = ('0' + d.seconds()).slice(-2);
    this.setState({
      currentHours: hours,
      currentMinutes: minutes,
      currentSeconds: seconds
    });
  },
  componentDidMount: function() {
    this.startCountDown(120 * 60 * 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className="timer">{
        this.state.currentHours + ' : ' +
        this.state.currentMinutes + ' : ' +
        this.state.currentSeconds}
      </div>
    );
  }
});
