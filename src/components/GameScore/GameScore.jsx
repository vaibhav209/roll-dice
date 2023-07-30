import React from 'react';
import styles from './GameScore.module.css';

const GameScore = ({ score }) => {
  return (
    <div className={styles.scoreText}>
      <div className={styles.showScore}>{score}</div>
      <p>Total Score</p>
    </div>
  );
};

export default GameScore;
