import React, { Component } from 'react'
import { motion } from 'framer-motion';
import './App.css';
import resume from './assets/JackHuResume.pdf';

class App extends Component {

  /*constructor(props) {
    super(props);

    this.state = {};
  }*/

  render() {

    return (
      <div className="App">
        <div className="Intro">
          <motion.div className="Terminal" initial={{ opacity: 0 }} animate={{ opacity: 1, width: 960, height: 540 }} transition={{ ease: "easeIn", duration: 1.5 }}>
            <motion.h1>Jack Hu</motion.h1>
            <motion.p>Professional. Fun-loving. All at the same time.</motion.p>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default App;
