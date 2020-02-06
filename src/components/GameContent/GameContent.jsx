import React from 'react';
import styles from './GameContent.module.scss';

import Description from './Description/Description';
import Options from './Options/Options';

export default function GameContent() {
  return (
    <div className={styles.container}>
      <Options />
      <Description />
    </div>
  );
}
