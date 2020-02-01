import React, { Component } from 'react';
import { motion, useAnimation, motionValue, useTransform } from 'framer-motion';
import './App.css';
import resume from './assets/JackHuResume.pdf';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import profile from './assets/icons/profile.svg';
import down from './assets/icons/down.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  IntroWindow = (props) => {
    let { width, height } = props;
    const windowControls = useAnimation(), textControls = useAnimation(), logoControls = useAnimation();
    windowControls.start({
      opacity: 1,
      width: width / 2,
      height: height / 2,
      transition: { ease: "easeOut", duration: 1 }
    });

    textControls.start({
      opacity: 1,
      transition: { delay: 1.2, ease: "easeOut", duration: 1 }
    });

    logoControls.start({
      opacity: 1,
      y: 25,
      transition: { delay: 1.2, ease: "easeOut", duration: 1 }
    });

    return (
      <div className="Intro">
        <motion.div className="Terminal" initial={{ opacity: 0 }} animate={windowControls}>
          <div>
            <motion.h1 initial={{ opacity: 0 }} animate={textControls}>Jack Hu</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={textControls}>Professional. Fun-loving. All at the same time. WIP.</motion.p>
          </div>
          <div className="Logos">
            <a href="https://www.linkedin.com/in/jackhu242">
              <motion.img src={linkedin} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
            <a href="https://www.github.com/jackhu.io">
              <motion.img src={github} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
            <a href={resume}>
              <motion.img src={profile} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
          </div>
        </motion.div>
        <motion.img src={down} animate={{ y: [0, 10, 0] }} transition={{ ease: "easeInOut", loop: "Infinity", duration: 1 }} />
      </div>
    );
  }

  render() {

    let { width, height } = this.state;

    return (
      <div className="App">
        <this.IntroWindow width={width} height={height} />
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: width < 800 ? "column" : "row", maxWidth: width / 1.5, height: "100vh" }}>
          <div className="Bio">
            <motion.h2>More about me.</motion.h2>
            <motion.p>Hi! Thanks for checking out my personal page.
                I'm currently a student studying Software Engineering at the University of Waterloo.
                In my spare time, I like to cook, play the piano, or play a few rounds of whatever game I'm into at the time.
                I'm interested in machine learning and data analysis, along with full stack web/mobile development.
                Check out what I've been working on at my GitHub! This page is still a work in progress.</motion.p>
          </div>
          <div style={{ backgroundColor: "white", maxWidth: 400, height: 400, flex: 1, borderRadius: 20, margin: 20 }}></div>
        </div>
      </div >
    );
  }
}

export default App;
