import React from 'react';
import styles from './Header.module.scss';

export default function Header({ questionBlocks, currentQuestionBlock, score }) {
  const questionElements = questionBlocks.map((el, i) => (
    <li
      className={
        currentQuestionBlock === i
          ? `${styles.staticBar__item} ${styles.staticBar__item_selected}`
          : styles.staticBar__item
      }
      key={el.id}
    >
      <span>{el.name}</span>
    </li>
  ));

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>logo</h1>
      <span>{`score: ${score}`}</span>
      <ul className={styles.staticBar__list}>{questionElements}</ul>
    </header>
  );
}
