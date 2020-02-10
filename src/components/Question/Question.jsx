import React from 'react';
import Player from '../Player/Player';
import styles from './Question.module.scss';

export default function Question({ currentRightOption, levelDone, data }) {
  const imgStyleDone = `${styles.img_wrapper}`;
  const imgStyleUndone = `${styles.img_wrapper} ${styles.img_wrapper__undone}`;

  return (
    <div className={styles.container}>
      <div
        className={levelDone ? imgStyleDone : imgStyleUndone}
        style={levelDone ? { backgroundImage: `url(${data[currentRightOption].image})` } : {}}
      />
      <div className={styles.player_wrapper}>
        <div className={styles.answer}>
          <span>{levelDone ? data[currentRightOption].name : '******'}</span>
        </div>
        <div className={styles.player}>
          <Player audio={data[currentRightOption].audio} />
        </div>
      </div>
    </div>
  );
}
