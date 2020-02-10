import React from 'react';
import styles from './Description.module.scss';
import Player from '../../Player/Player';

export default function Description({ lastSelectedOptionData }) {
  if (lastSelectedOptionData === null) {
    return (
      <div className={styles.empty}>
        <p>Послушайте плеер</p>
        <p>Выберите птицу из списка</p>
      </div>
    );
  }
  return (
    <div className={styles.description_container}>
      <div
        className={styles.description_img}
        style={{ backgroundImage: `url(${lastSelectedOptionData.image})` }}
      />
      <div className={styles.description_name}>{lastSelectedOptionData.name}</div>
      <div className={styles.description_species}>{lastSelectedOptionData.species}</div>
      <div className={styles.description_player}>
        <Player audio={lastSelectedOptionData.audio} />
      </div>
      <div className={styles.description_full}>{lastSelectedOptionData.description}</div>
    </div>
  );
}
