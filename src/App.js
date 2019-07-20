import React, { Component } from "react";

import LandingPage from "./LandingPage";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

class App extends Component {
  state = {
    clickCount: 0,
    iconClicked: false
  };

  onClick = () => {
    let clickCount = this.state.clickCount;

    console.log("clicked");

    this.setState({
      clickCount: clickCount + 1
    });
  };

  iconClicked = () => {
    let clickCount = this.state.clickCount;
    if (this.state.iconClicked) {
      clickCount = clickCount + 1;
    }
    this.setState({
      clickCount: clickCount + 1
    });
  };
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">
          <LeftPanel clickCount={this.state.clickCount} />
        </div>
        <div className="eight wide column">
          <LandingPage clicked={this.onClick} />
        </div>
        <div className="four wide column">
          <RightPanel
            clickCount={this.state.clickCount}
            iconClicked={this.iconClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
