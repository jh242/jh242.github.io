import React from 'react';

export default function Bio() {
  return (
    <div className="bio">
      <div className="bio-text">
        <h2>More about me:</h2>
        <p>
          Hi! Thanks for checking out my personal page.
          I&apos;m currently a student studying Software Engineering at the University of Waterloo.
          In my spare time, I like to cook, play the piano, or play a few rounds of Valorant!
          I&apos;m mostly interested in full stack web/mobile development, but also enjoy learning about
          machine learning, data analysis and VR/AR. Check out some of my projects on my
          {' '}
          <a href="https://github.com/jh242" target="_blank" rel="noopener noreferrer">Github</a>
          !
        </p>
      </div>
      <img
        className="image"
        src="/images/me.jpg"
        alt="waterloo orientation"
      />
    </div>
  );
}
