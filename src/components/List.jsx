/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import items from './data';

function Card({ id, title }) {
  return (
    <li className="card">
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`/images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className="card-open-link" />
    </li>
  );
}

export default function List({ id }) {
  return (
    <ul className="card-list">
      {items.map((card) => (
        <Card key={card.id} {...card} isSelected={card.id === id} />
      ))}
    </ul>
  );
}
