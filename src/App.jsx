import { useState } from 'react';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import Result from './components/Result.jsx';
import { calculateScores } from './data/questions.js';

function App() {
  const [screen, setScreen] = useState('home');
  const [rawScores, setRawScores] = useState(null);
  const [answers, setAnswers] = useState(null);

  const handleStart = () => {
    setScreen('quiz');
  };

  const handleComplete = (userAnswers) => {
    const scores = calculateScores(userAnswers);
    setRawScores(scores);
    setAnswers(userAnswers);
    setScreen('result');
  };

  const handleRestart = () => {
    setRawScores(null);
    setAnswers(null);
    setScreen('home');
  };

  return (
    <div className="font-sans antialiased">
      {screen === 'home' && <Home onStart={handleStart} />}
      {screen === 'quiz' && <Quiz onComplete={handleComplete} />}
      {screen === 'result' && rawScores && answers && <Result rawScores={rawScores} answers={answers} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
