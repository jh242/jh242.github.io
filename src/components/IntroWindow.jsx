import React from 'react';

import {
  motion, useAnimation,
} from 'framer-motion';

import resume from '../assets/JackHuResume.pdf';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import profile from '../assets/icons/profile.svg';
import down from '../assets/icons/down.svg';

export default function IntroWindow() {
  const textControls = useAnimation();
  const logoControls = useAnimation();

  textControls.start({
    opacity: 1,
    transition: { delay: 1.2, ease: 'easeOut', duration: 1 },
  });

  logoControls.start({
    opacity: 1,
    y: 25,
    transition: { delay: 1.2, ease: 'easeOut', duration: 1 },
  });

  return (
    <div className="intro">
      <div className="title">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={textControls}
        >
          Jack Hu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={textControls}
        >
          Hi! I&apos;m a Full-Stack Web Developer!
        </motion.p>
      </div>
      <div className="footer">
        <div className="logos">
          <a href="https://www.linkedin.com/in/jackhu242" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={linkedin}
              initial={{ opacity: 0, width: 50, height: 50 }}
              animate={logoControls}
              alt="linkedin"
            />
          </a>
          <a href="https://www.github.com/jh242" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={github}
              initial={{ opacity: 0, width: 50, height: 50 }}
              animate={logoControls}
              alt="github"
            />
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <motion.img
              src={profile}
              initial={{ opacity: 0, width: 50, height: 50 }}
              animate={logoControls}
              alt="resume"
            />
          </a>
        </div>
        <motion.img
          src={down}
          animate={{ y: [0, 10, 0] }}
          transition={{ ease: 'easeInOut', loop: 'Infinity', duration: 1 }}
        />
      </div>
    </div>
  );
}
