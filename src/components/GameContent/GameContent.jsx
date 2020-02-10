import React from 'react';
import styles from './GameContent.module.scss';

import Description from './Description/Description';
import Options from './Options/Options';

export default function GameContent({
  blockData,
  currentRightOption,
  levelDone,
  currentBlockSelectedOptions,
  onKeyPress,
  onOptionClick,
  lastSelectedOption,
}) {
  const lastSelectedOptionData = lastSelectedOption !== null ? blockData[lastSelectedOption] : null;

  return (
    <div className={styles.container}>
      <Options
        blockData={blockData}
        currentRightOption={currentRightOption}
        levelDone={levelDone}
        currentBlockSelectedOptions={currentBlockSelectedOptions}
        onKeyPress={onKeyPress}
        onOptionClick={onOptionClick}
      />
      <Description lastSelectedOptionData={lastSelectedOptionData} />
    </div>
  );
}
