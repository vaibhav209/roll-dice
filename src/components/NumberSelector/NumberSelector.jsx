import React from 'react';
import styles from './NumberSelector.module.css';

const NumberSelector = ({
  arr,
  selectedNumber,
  errorMsg,
  handleNumberSelection
}) => {
  return (
    <div className={styles.selectorContainer}>
      {errorMsg && (
        <div className={styles.errorText}>
          You have not selected any number!
        </div>
      )}
      <div className={styles.selectorBoard}>
        {arr.map((value, id) => {
          return (
            <div
              key={id}
              className={`${styles.numSelector} ${
                value === selectedNumber ? styles.selected : ''
              }`}
              onClick={() => handleNumberSelection(value)}
            >
              {value}
            </div>
          );
        })}
      </div>
      <p className={styles.infoText}>Select Number</p>
    </div>
  );
};

export default NumberSelector;
