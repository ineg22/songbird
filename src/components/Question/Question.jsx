import React from 'react';
import styles from './Question.module.scss';

export default function Question() {
  return (
    <div className={styles.container}>
      <div className={styles.img_wrapper} />
      <div className={styles.player_wrapper}>
        <div className={styles.answer}>
          <span>Bird</span>
        </div>
        <div className={styles.player} />
      </div>
    </div>
  );
}
