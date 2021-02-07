import React from 'react';
import { skills } from './data';

export default function Skills() {
  return (
    <div className="skills">
      <h2>Stuff I can do:</h2>
      <p>These are the languages and technologies I&apos;m comfortable with.</p>
      <div className="columns">
        {Object.keys(skills).map((category) => (
          <div>
            <h3 className="skillCategory">{category}</h3>
            {skills[category].map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
