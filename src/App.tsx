import React from 'react';
import './App.css';
import { Summary } from './features/summary/Summary';
import { Log } from './features/log/Log';

function App() {
  return (
    <div>
      <Log />
      <Summary />
    </div>
  );
}

export default App;

