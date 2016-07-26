import React, { Component } from 'react';

export default class Nurses extends Component {

  render() {
    var nursesArr = this.props.nurses;
    return (
      <div className="container">
        <div className="nurse">
          <input
            type="checkbox"
            value={nursesArr}
            onChange={this.props.select}>
          </input><span className="selectall">Select all</span>
        </div>
          {this.props.nurses.map((el, i) => {
            return (
              <div className="nurse" key={i}>
                <input
                  type="checkbox"
                  value={el}
                  onChange={this.props.select}>
                </input><span className="name">{el}</span>
              </div>
            );
          })}
      </div>
    );
  }
}
