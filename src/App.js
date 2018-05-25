import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  }

  incLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>
            Likes Till now: {this.state.likes}
            </p>
        </p>
        <button onClick={this.incLikes}>Like</button>
      </div>

    );
  }
}

export default App;
