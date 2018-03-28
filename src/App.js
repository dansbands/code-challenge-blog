import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import PostContainer from './components/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
