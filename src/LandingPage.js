import React, { Component } from "react";

class LandingPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="ui grid">
          <div className="four wide column">
            <h5>Name</h5>
            <a href="#" onClick={this.props.clicked}>
              <p>Shubham</p>
            </a>
          </div>
          <div className="four wide column">
            <h5>Email</h5>
            <p>reach.shubham.soni@gmail.com</p>
          </div>
        </div>
        <div className="ui grid">
          <div className="four wide column">
            <h5>Phone</h5>

            <p>9718581385</p>
          </div>
          <div className="four wide column">
            <h5>Designation</h5>
            <p>Front End</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
