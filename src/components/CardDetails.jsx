/* eslint-disable react/prop-types */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import items from './data';

export default function CardDetails({ id }) {
  const {
    title, titleReplacement, details,
  } = items.find((item) => item.id === id);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`/images/${id}.jpg`} alt="" style={{ resizeMode: 'stretch' }} />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <h2>{titleReplacement}</h2>
            <p>
              {details}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
