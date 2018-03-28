import React from "react";
import "../css/App.css";
import logo3 from "../img/logo3.webp";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo3} alt="" className="App-logo" />
        </div>
        <div className="App-title-bar">
          <h3 className="App-title">HRS Blog</h3>
        </div>
      </div>
    );
  }
}

export default Header;
