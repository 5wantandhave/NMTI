import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  currentQuestion: number;
  answers: Record<number, number>;
  progress: number;
  onAnswer: (questionId: number, optionIndex: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({
  questions,
  currentQuestion,
  answers,
  progress,
  onAnswer
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  useEffect(() => {
    setSelectedOption(answers[question.id] ?? null);
    setIsAnimating(false);
  }, [currentQuestion, question.id, answers]);

  const handleOptionClick = (optionIndex: number) => {
    if (isAnimating) return;
    setSelectedOption(optionIndex);
    setIsAnimating(true);
    setTimeout(() => {
      onAnswer(question.id, optionIndex);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-cyber flex flex-col">
      <div className="p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">
              {currentQuestion + 1} / {totalQuestions}
            </span>
            <span className="text-xs text-pink">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-pink rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <p className="text-sm text-accent mb-2">{question.scenario}</p>
            <h2 className="text-xl font-semibold text-white">{question.text}</h2>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnimating}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform border-2 ${
                  selectedOption === index
                    ? 'bg-accent/20 border-accent scale-102 shadow-lg shadow-accent/20'
                    : 'bg-white/5 border-white/10 hover:border-accent/50 hover:bg-white/10'
                } ${isAnimating && selectedOption !== index ? 'opacity-50' : ''}`}
              >
                <span
                  className={`text-sm ${
                    selectedOption === index ? 'text-accent' : 'text-gray-300'
                  }`}
                >
                  {option.text}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-1 mt-8">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuestion
                    ? 'bg-accent w-4'
                    : answers[questions[index].id] !== undefined
                    ? 'bg-pink'
                    : 'bg-white/20'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};