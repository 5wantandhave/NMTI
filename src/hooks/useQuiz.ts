import { useReducer, useMemo, useEffect, useCallback, useRef } from 'react';
import { QuizState, QuizAction, Question } from '../types';
import { calculateScore } from '../utils/calculate';

const initialState: QuizState = {
  currentQuestion: 0,
  answers: {},
  scores: { J: 0, I: 0, F: 0, S: 0 },
  result: null
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ANSWER': {
      const newAnswers = { ...state.answers, [action.questionId]: action.optionIndex };
      return { ...state, answers: newAnswers };
    }
    case 'NEXT_QUESTION': {
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    }
    case 'CALCULATE_RESULT': {
      return state;
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}

export function useQuiz(questions: Question[]) {
  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions]);
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const totalQuestions = shuffledQuestions.length;

  const currentQ = shuffledQuestions[state.currentQuestion];
  const progress = (state.currentQuestion / totalQuestions) * 100;
  const answeredCount = Object.keys(state.answers).length;

  const isLastQuestion = state.currentQuestion === totalQuestions - 1;
  const hasAnsweredCurrent = currentQ ? state.answers[currentQ.id] !== undefined : false;

  const handleAnswer = useCallback((questionId: number, optionIndex: number) => {
    dispatch({ type: 'ANSWER', questionId, optionIndex });
    if (state.currentQuestion < totalQuestions - 1) {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  }, [state.currentQuestion, totalQuestions]);

  useEffect(() => {
    if (hasAnsweredCurrent && answeredCount === totalQuestions && totalQuestions > 0) {
      setTimeout(() => {
        dispatch({ type: 'CALCULATE_RESULT' });
      }, 500);
    }
  }, [hasAnsweredCurrent, answeredCount, totalQuestions]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const getResult = useCallback((answers: Record<number, number>) => {
    return calculateScore(answers, shuffledQuestions);
  }, [shuffledQuestions]);

  const computedResult = useMemo(() => {
    if (answeredCount === totalQuestions && totalQuestions > 0) {
      return calculateScore(state.answers, shuffledQuestions);
    }
    return null;
  }, [answeredCount, totalQuestions, state.answers, shuffledQuestions]);

  return {
    state,
    shuffledQuestions,
    currentQ,
    progress,
    answeredCount,
    handleAnswer,
    reset,
    getResult,
    computedResult
  };
}