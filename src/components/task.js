import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  componentDidMount: function() {
    this.setState({
      text: 'Finish Adder Block'
    });
  },
  render: function() {
    return (
      <div className="task">{this.state.text}</div>
    );
  }
});
