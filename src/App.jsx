// Component imports
import React from 'react';
import Particles from 'react-particles-js';
import {
  IntroWindow,
  Bio,
} from './components';

// Give it some style!
import './App.css';

// Asset imports

function App() {
  return (
    <div className="app">
      <Particles className="particles" />
      <IntroWindow />
      <Bio />
    </div>
  );
}

export default App;
