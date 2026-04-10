import { useState } from 'react';
import { QUESTIONS } from '../data/questions.js';

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-between items-center text-white/60 text-sm mb-2">
            <span>第 {currentQuestion + 1} / {QUESTIONS.length} 题</span>
            <span>{question.scene}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <h2 className="text-xl text-white font-medium mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  selectedOption === index
                    ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-2 border-yellow-400'
                    : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    selectedOption === index
                      ? 'bg-yellow-400 text-black'
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-white/90 text-sm leading-relaxed">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              currentQuestion === 0
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            上一题
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              selectedOption === null
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:scale-105'
            }`}
          >
            {currentQuestion === QUESTIONS.length - 1 ? '查看结果' : '下一题'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
