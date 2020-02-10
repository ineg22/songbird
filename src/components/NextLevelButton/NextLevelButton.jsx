import React from 'react';
import styles from './NextLevelButton.module.scss';

export default function NextLevelButton({ onNextClick, levelDone }) {
  if (levelDone) {
    return (
      <button
        type="button"
        className={`${styles.button} ${styles.button__done}`}
        onClick={onNextClick}
      >
        next
      </button>
    );
  }
  return (
    <button type="button" className={styles.button}>
      next
    </button>
  );
}
