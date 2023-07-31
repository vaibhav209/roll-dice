import React from 'react';
import styles from './RollDice.module.css';

const RollDice = ({ btnName, photo, diceBtnHandler, resetBtnHandler, ruleToggleHandler }) => {
  return (
    <div className={styles.rollDice}>
        <div>
          <img
            src={photo}
            alt="dice"
            width="90"
            height="90"
            className={styles.btnStyles}
            onClick={diceBtnHandler}
          />
        </div>
        <div>
          <button className={styles.resetBtn} onClick={resetBtnHandler}>
            Reset Score
          </button>
          <div>
            <button className={styles.ruleBtn} onClick={ruleToggleHandler}>
              {btnName}
            </button>
          </div>
        </div>
      </div>
  );
};

export default RollDice;
