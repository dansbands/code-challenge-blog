import React from "react";
import "../css/App.css";
import dpo from "../img/dpo-logo.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={dpo} alt="" className="App-logo" />
        </div>
        <div className="App-title-bar">
          <h3 className="App-title">DPO Blog</h3>
        </div>
      </div>
    );
  }
}

export default Header;
