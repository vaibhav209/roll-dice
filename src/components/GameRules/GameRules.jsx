import React from 'react';
import styles from './GameRules.module.css';

const GameRules = () => {
  return (
    <div className={styles.rulesContainer}>
      <h2 className={styles.textHeading}>How to play dice game</h2>
      <div className={styles.textNormal}>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{' '}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};

export default GameRules;
