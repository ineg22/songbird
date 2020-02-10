import React, { Component } from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Question from './components/Question/Question';
import GameContent from './components/GameContent/GameContent';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

import data from './bll/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionBlock: 0,
      currentRightOption: Math.floor(Math.random() * 6),
      currentBlockSelectedOptions: [false, false, false, false, false, false],
      lastSelectedOption: null,
      score: 0,
      levelDone: false,
      gameDone: false,
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onOptionClick = this.onOptionClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  onKeyPress() {
    this.setState(state => state);
  }

  onOptionClick(id) {
    this.setState(state => {
      const newCurrentBlockSelectedOptions = state.currentBlockSelectedOptions.map((el, i) => {
        return i === id && !state.levelDone ? true : el;
      });
      const newLevelDone = state.levelDone ? state.levelDone : state.currentRightOption === id;
      const newScore =
        state.currentRightOption === id && !state.levelDone
          ? state.score + state.currentBlockSelectedOptions.filter(el => !el).length - 1
          : state.score;

      return {
        ...state,
        currentBlockSelectedOptions: newCurrentBlockSelectedOptions,
        lastSelectedOption: id,
        levelDone: newLevelDone,
        score: newScore,
      };
    });
  }

  onNextClick() {
    this.setState(state => {
      if (state.currentQuestionBlock === 5) {
        return {
          ...state,
          gameDone: true,
          levelDone: true,
        };
      }
      return {
        ...state,
        currentBlockSelectedOptions: [false, false, false, false, false, false],
        lastSelectedOption: null,
        levelDone: false,
        currentQuestionBlock: state.currentQuestionBlock + 1,
        currentRightOption: Math.floor(Math.random() * 6),
      };
    });
  }

  render() {
    const {
      currentRightOption,
      currentQuestionBlock,
      currentBlockSelectedOptions,
      score,
      levelDone,
      lastSelectedOption,
    } = this.state;

    return (
      <div className={styles.container}>
        <Header
          questionBlocks={data[6]}
          currentQuestionBlock={currentQuestionBlock}
          score={score}
        />
        <Question
          currentRightOption={currentRightOption}
          levelDone={levelDone}
          data={data[currentQuestionBlock]}
        />
        <GameContent
          blockData={data[currentQuestionBlock]}
          currentRightOption={currentRightOption}
          levelDone={levelDone}
          currentBlockSelectedOptions={currentBlockSelectedOptions}
          onKeyPress={this.onKeyPress}
          onOptionClick={this.onOptionClick}
          lastSelectedOption={lastSelectedOption}
        />
        <NextLevelButton levelDone={levelDone} onNextClick={this.onNextClick} />
      </div>
    );
  }
}

export default App;
