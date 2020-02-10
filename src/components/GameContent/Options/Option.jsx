import React from 'react';
import styles from './Option.module.scss';

export default function Option({
  itemData,
  id,
  currentRightOption,
  selected,
  onKeyPress,
  onOptionClick,
  /* , levelDone */
}) {
  let optionStyle;
  if (selected && id === currentRightOption) {
    optionStyle = `${styles.options_item} ${styles.options_item__correct}`;
  } else if (selected && id !== currentRightOption) {
    optionStyle = `${styles.options_item} ${styles.options_item__incorrect}`;
  } else optionStyle = styles.options_item;

  return (
    <li className={optionStyle}>
      <button
        type="button"
        onClick={() => onOptionClick(id)}
        onKeyPress={onKeyPress}
        className={styles.options_button}
      >
        {itemData}
      </button>
    </li>
  );
}
