import React from 'react';
import cow from './cow.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cow} className="App-logo" alt="cow" />
        <p>
          Is the COW DEAD for BEEF or is the BEEF a DEAD COW ???
        </p>
        <button className="da-button">Deposit 1 ETH to 0xDEADBEEF to know</button>
      </header>
    </div>
  );
}

export default App;
