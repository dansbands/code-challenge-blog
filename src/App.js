import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import PostContainer from './components/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header-container">
          <Header />
        </div>
        <div className="App-body">
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
