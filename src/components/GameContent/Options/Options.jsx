import React from 'react';
import styles from './Options.module.scss';

export default function Options() {
  return (
    <div className={styles.options_container}>
      <ul className={styles.options_list}>
        <li className={styles.options_item}>
          <span>asd</span>
        </li>
        <li className={styles.options_item}>
          <span>qwe</span>
        </li>
        <li className={styles.options_item}>
          <span>zxc</span>
        </li>
        <li className={styles.options_item}>
          <span>ert</span>
        </li>
        <li className={styles.options_item}>
          <span>yui</span>
        </li>
        <li className={styles.options_item}>
          <span>hjk</span>
        </li>
      </ul>
    </div>
  );
}
