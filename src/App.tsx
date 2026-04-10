import React, { useState } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { Result } from './components/Result';
import { useQuiz } from './hooks/useQuiz';
import { QUESTIONS } from './data/questions';
import { NMTI_TYPES } from './data/types';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const {
    state,
    shuffledQuestions,
    progress,
    handleAnswer,
    reset,
    computedResult
  } = useQuiz(QUESTIONS);

  const handleStart = () => {
    setCurrentPage('quiz');
  };

  const handleShowResult = () => {
    setCurrentPage('result');
  };

  const handleRestart = () => {
    reset();
    setCurrentPage('home');
  };

  React.useEffect(() => {
    if (computedResult) {
      const timer = setTimeout(() => {
        handleShowResult();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [computedResult]);

  if (currentPage === 'home') {
    return <Home onStart={handleStart} />;
  }

  if (currentPage === 'quiz' || !computedResult) {
    return (
      <Quiz
        questions={shuffledQuestions}
        currentQuestion={state.currentQuestion}
        answers={state.answers}
        progress={progress}
        onAnswer={handleAnswer}
      />
    );
  }

  const typeInfo = NMTI_TYPES[computedResult.code] || Object.values(NMTI_TYPES)[0];

  return (
    <Result
      typeCode={computedResult.code}
      typeInfo={typeInfo}
      scores={computedResult.scores}
      answers={state.answers}
      onRestart={handleRestart}
    />
  );
}

export default App;