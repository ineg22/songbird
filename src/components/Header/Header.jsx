import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>logo</h1>
      <span>score: 0</span>
      <ul className={styles.staticBar__list}>
        <li className={`${styles.staticBar__item} ${styles.staticBar__item_selected} `}>
          <span>разминка</span>
        </li>
        <li className={styles.staticBar__item}>
          <span>рок</span>
        </li>
        <li className={styles.staticBar__item}>
          <span>поп</span>
        </li>
        <li className={styles.staticBar__item}>
          <span>хип-хоп</span>
        </li>
        <li className={styles.staticBar__item}>
          <span>народное</span>
        </li>
        <li className={styles.staticBar__item}>
          <span>блюз</span>
        </li>
      </ul>
    </header>
  );
}
