import React, { Component } from 'react';

export default class Display extends Component {
// props emptyBeds, occupied
  render() {
    if (this.props.emptyBeds.length === 0 && this.props.occupied.length > 0) var allAssigned = 'All beds have been assigned!';
    else var allAssigned = null;
    var census = this.props.occupied.length;
    return (
      <div className="container">
          <div className="container-left">
            <div className="header">Today's empty beds:</div>
              {this.props.emptyBeds.map((el, i) => {
                return (
                  <span className="room" key={i}>{el}</span>
                );
              })}
              <span className="room">{allAssigned}</span>
          </div>
          <div className="container-right">
            <div className="header">Census:</div> <span className="large-font">{census}</span>
          </div>
      </div>
    );
  }
}
