import React from 'react';
import styles from './Options.module.scss';
import Option from './Option';

export default function Options({
  blockData,
  currentRightOption,
  levelDone,
  currentBlockSelectedOptions,
  onKeyPress,
  onOptionClick,
}) {
  const optionElements = blockData.map(el => (
    <Option
      itemData={el.name}
      id={el.id}
      key={el.id}
      currentRightOption={currentRightOption}
      levelDone={levelDone}
      selected={currentBlockSelectedOptions[el.id]}
      onKeyPress={onKeyPress}
      onOptionClick={onOptionClick}
    />
  ));

  return (
    <div className={styles.options_container}>
      <ul className={styles.options_list}>{optionElements}</ul>
    </div>
  );
}
