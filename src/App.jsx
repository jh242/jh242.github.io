/* eslint-disable react/prop-types */

// Component imports
import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import {
  IntroWindow,
  Bio,
  List,
  CardDetails,
} from './components';

// Give it some style!
import './App.css';

// Asset imports

function Portfolio({ match }) {
  const { id } = match.params;

  return (
    <div className="portfolio">
      <AnimatePresence>
        <h2>What I&apos;ve worked on:</h2>
        <p>
          Find these and more on my
          {' '}
          <a style={{ color: 'white' }} href="https://github.com/jh242?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
          !
        </p>
        <List id={id} />
        {id && <CardDetails id={id} key="item" />}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Particles className="particles" />
      <IntroWindow />
      <Bio />
      <AnimateSharedLayout>
        <Router>
          <Route path={['/:id', '/']} component={Portfolio} />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
