import React, { Component } from 'react';
import Word from './components/Word';
import logo from './logo.svg';
import './App.css';

const words = [
  { id: 'a1', en: 'One', vn: 'Mot', isMemorized: true },
  { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
  { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { words.map(word => <Word wordInfo={word} />) }
      </div>
    );
  }
}

export default App;
