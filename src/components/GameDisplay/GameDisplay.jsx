import React, { useState } from 'react';
import GameRules from '../GameRules/GameRules';
import GameScore from '../GameScore/GameScore';
import NumberSelector from '../NumberSelector/NumberSelector';
import RollDice from '../RollDice/RollDice';
import styles from './GameDisplay.module.css';

const GameDisplay = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  const [selectedNumber, setSelectedNumber] = useState(null);
  const [diceNumber, setDiceNumber] = useState(1);
  const [errorMsg, setErrorMsg] = useState(false);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [ruleBtnName, setRuleBtnName] = useState('Show Rules');
  const [welcmWall, setWelcmWall] = useState(true);

  const diceBtnHandler = () => {
    if (selectedNumber === null) {
      setErrorMsg(true);
      return;
    }

    const newDiceNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newDiceNumber);

    if (selectedNumber === newDiceNumber) {
      const newScore = score + newDiceNumber;
      setScore(newScore);
    } else {
      setScore(score - 2);
    }
    setErrorMsg(false);
    setSelectedNumber(null);
  };

  const handleNumberSelection = (value) => {
    setSelectedNumber(selectedNumber === value ? null : value);
    setErrorMsg(false);
  };

  const resetBtnHandler = () => {
    setScore(0);
  };
  const ruleToggleHandler = () => {
    setShowRules((prevShowRule) => !prevShowRule);

    setRuleBtnName((prevName) =>
      prevName === 'Show Rules' ? 'Hide Rules' : 'Show Rules'
    );
  };

  const photo = `https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_${diceNumber}-256.png`;

  return (
    <>
      {welcmWall ? (
        <div className={styles.gameWall}>
          <div>Welcome to the Dice Game!</div>
          <button
            className={styles.playBtn}
            onClick={() => setWelcmWall(false)}
          >
            Play Now
          </button>
        </div>
      ) : (
        <>
          <div className={styles.gameBoard}>
            <GameScore score={score} />
            <div className={styles.selectorContainer}>
              <NumberSelector
                arr={arr}
                selectedNumber={selectedNumber}
                errorMsg={errorMsg}
                handleNumberSelection={handleNumberSelection}
              />
            </div>
          </div>
          <RollDice
            photo={photo}
            diceBtnHandler={diceBtnHandler}
            resetBtnHandler={resetBtnHandler}
            ruleToggleHandler={ruleToggleHandler}
            btnName={ruleBtnName}
          />
          {showRules && <GameRules />}
        </>
      )}
    </>
  );
};

export default GameDisplay;
