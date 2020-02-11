import React from 'react';
import styles from './GameOver.module.scss';

export default function GameOver({ score, onRestartClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <span>Congratulation!</span>
      </div>
      <div className={styles.score}>{`You scored ${score} out of 30 possible points.`}</div>
      <button type="button" className={styles.restart} onClick={onRestartClick}>
        Restart
      </button>
    </div>
  );
}
