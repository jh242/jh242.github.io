//Component imports
import React, { Component } from 'react';
import { motion, useAnimation, motionValue, useTransform } from 'framer-motion';

//Give it some style!
import './App.css';

//Asset imports
import resume from './assets/JackHuResume.pdf';
import github from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.svg';
import profile from './assets/icons/profile.svg';
import down from './assets/icons/down.svg';
import me from './assets/me.jpg';

function IntroWindow () {
  const textControls = useAnimation(), logoControls = useAnimation();

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
    <div className="intro">
        <div style={{alignSelf: 'flex-start'}}>
          <motion.h1 initial={{ opacity: 0 }} animate={textControls}>Jack Hu</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={textControls}>Professional. Fun-loving. All at the same time. WIP.</motion.p>
        </div>
        <div>
          <div className="logos">
            <a href="https://www.linkedin.com/in/jackhu242">
              <motion.img src={linkedin} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
            <a href="https://www.github.com/jh242">
              <motion.img src={github} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
            <a href={resume}>
              <motion.img src={profile} initial={{ opacity: 0, width: 50, height: 50 }} animate={logoControls} />
            </a>
          </div>
        <motion.img src={down} animate={{ y: [0, 10, 0] }} transition={{ ease: "easeInOut", loop: "Infinity", duration: 1 }} />
      </div>
    </div>
  );
}

function App() {

    return (
      <div className="app">
        <IntroWindow />
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: width < 1300 ? "column" : "row", maxWidth: width / 1.5, height: height }}>
          <div className="bio">
            <motion.h2>More about me.</motion.h2>
            <motion.p>Hi! Thanks for checking out my personal page.
                I'm currently a student studying Software Engineering at the University of Waterloo.
                In my spare time, I like to cook, play the piano, or play a few rounds of whatever game I'm into at the time.
                I'm interested in machine learning and data analysis, along with full stack web/mobile development.
                Check out what I've been working on at my GitHub! This page is still a work in progress.</motion.p>
          </div>
          <motion.img style={{ maxWidth: 600, flex: 1, borderRadius: 20, margin: 20, resize: "cover" }} src={me} />
        </div>
      </div>
    );
}

export default App;
