import React from 'react';
import {
  motion,
} from 'framer-motion';

import me from '../assets/me.jpg';

export default function Bio() {
  // eslint-disable-next-line no-undef
  const width = document.documentElement.clientWidth;

  return (
    <div className={width < 1350 ? 'bio-mobile' : 'bio'}>
      <div className="bio-text">
        <motion.h2>More about me.</motion.h2>
        <motion.p>
          Hi! Thanks for checking out my personal page.
          I&apos;m currently a student studying Software Engineering at the University of Waterloo.
          In my spare time, I like to cook, play the piano, or play a few rounds of whatever game
          I&apos;m into at the time. I&apos;m interested in machine learning and data analysis,
          along with full stack web/mobile development. Check out what I&apos;ve been working on
          at my GitHub! This page is still a work in progress.
        </motion.p>
      </div>
      <motion.img
        className="image"
        src={me}
      />
    </div>
  );
}
