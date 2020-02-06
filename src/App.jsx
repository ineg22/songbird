import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Question from './components/Question/Question';
import GameContent from './components/GameContent/GameContent';
import NextLevelButton from './components/NextLevelButton/NextLevelButton';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Question />
      <GameContent />
      <NextLevelButton />
    </div>
  );
}

export default App;
