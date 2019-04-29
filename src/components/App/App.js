import React from 'react';
import logo from './logo.svg';
import '../../assets/css/App.css';

import Counter from '../Counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
