import React from 'react';
import styles from './GameOver.module.scss';

export default function GameOver({ score }) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <span>Congratulation!</span>
      </div>
      <div className={styles.score}>{`Your score is ${score}`}</div>
      <button type="button" className={styles.restart}>
        Restart
      </button>
    </div>
  );
}
