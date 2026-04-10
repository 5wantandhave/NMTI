export type Dimension = 'J' | 'P' | 'I' | 'E' | 'F' | 'T' | 'S' | 'N';

export interface NMTIType {
  code: string;
  name: string;
  description: string;
  characteristics: string[];
  luckyTip: string;
}

export interface Option {
  text: string;
  scores: Partial<Record<Dimension, number>>;
}

export interface Question {
  id: number;
  text: string;
  scenario: string;
  options: Option[];
}

export interface QuizState {
  currentQuestion: number;
  answers: Record<number, number>;
  scores: {
    J: number;
    I: number;
    F: number;
    S: number;
  };
  result: string | null;
}

export type QuizAction =
  | { type: 'ANSWER'; questionId: number; optionIndex: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'CALCULATE_RESULT' }
  | { type: 'RESET' };

export type PageType = 'home' | 'quiz' | 'result';