import React, { Component } from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Question from './components/Question/Question';
import GameContent from './components/GameContent/GameContent';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';
import GameOver from './components/GameOver/GameOver';

import data from './bll/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionBlock: 0,
      currentRightOption: Math.floor(Math.random() * 6),
      currentBlockSelectedOptions: Array(6).fill(false),
      lastSelectedOption: null,
      score: 0,
      levelDone: false,
      gameDone: false,
    };

    this.audioCorrect = new Audio('./assets/sounds/correct-answer-sound-effect.mp3');
    this.audioIncorrect = new Audio('./assets/sounds/you-opinion-is-incorrect.mp3');

    this.onOptionClick = this.onOptionClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.onRestartClick = this.onRestartClick.bind(this);
  }

  onRestartClick() {
    this.setState({
      currentQuestionBlock: 0,
      currentRightOption: Math.floor(Math.random() * 6),
      currentBlockSelectedOptions: Array(6).fill(false),
      lastSelectedOption: null,
      score: 0,
      levelDone: false,
      gameDone: false,
    });
  }

  onOptionClick(id) {
    this.setState(prevState => {
      const isCorrect = prevState.currentRightOption === id;

      const newLevelDone = prevState.levelDone ? prevState.levelDone : isCorrect;
      const newCurrentBlockSelectedOptions = prevState.currentBlockSelectedOptions.map((el, i) => {
        return i === id && !prevState.levelDone ? true : el;
      });
      const newScore =
        isCorrect && !prevState.levelDone
          ? prevState.score + prevState.currentBlockSelectedOptions.filter(el => !el).length - 1
          : prevState.score;

      if (!prevState.levelDone) {
        this.playSound(isCorrect);
      }

      return {
        ...prevState,
        currentBlockSelectedOptions: newCurrentBlockSelectedOptions,
        lastSelectedOption: id,
        levelDone: newLevelDone,
        score: newScore,
      };
    });
  }

  onNextClick() {
    this.setState(prevState => {
      let newCurrentQuestionBlock;
      let newGameDone;

      if (prevState.currentQuestionBlock === 5) {
        newCurrentQuestionBlock = 0;
        newGameDone = true;
      } else {
        newCurrentQuestionBlock = prevState.currentQuestionBlock + 1;
        newGameDone = false;
      }
      return {
        ...prevState,
        gameDone: newGameDone,
        currentQuestionBlock: newCurrentQuestionBlock,
        levelDone: false,
        lastSelectedOption: null,
        currentRightOption: Math.floor(Math.random() * 6),
        currentBlockSelectedOptions: Array(6).fill(false),
      };
    });
  }

  playSound(isCorrect) {
    this.audioIncorrect.load();
    this.audioCorrect.load();

    if (isCorrect) {
      this.audioCorrect.play();
    } else {
      this.audioIncorrect.play();
    }
  }

  render() {
    const {
      currentRightOption,
      currentQuestionBlock,
      currentBlockSelectedOptions,
      score,
      levelDone,
      lastSelectedOption,
      gameDone,
    } = this.state;

    if (gameDone) {
      return (
        <div className={styles.container}>
          <Header
            questionBlocks={data[6]}
            currentQuestionBlock={currentQuestionBlock}
            score={score}
          />
          <GameOver score={score} onRestartClick={this.onRestartClick} />
        </div>
      );
    }

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
