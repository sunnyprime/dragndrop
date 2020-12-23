import React from 'react';
import './App.css';
import DND from './Components/DND';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="App-base">
        <DND />
      </div>
    </div>
  );
}

export default App;