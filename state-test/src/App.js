import React from 'react';
import Game from './Game'
import Rando from './rando';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      MY APP
      {/* <Game />
      <Rando maxNum={10} /> */}
      <Clicker />
    </div>
  );
}

export default App;
