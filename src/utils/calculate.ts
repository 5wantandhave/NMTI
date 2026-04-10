import { Question } from '../types';
import { NMTI_TYPES } from '../data/types';

export interface ScoreResult {
  code: string;
  scores: {
    J: number;
    I: number;
    F: number;
    S: number;
  };
}

export interface AlternativeResult {
  code: string;
  name: string;
  description: string;
  keyDifferences: string[];
}

type Dimension = 'J' | 'P' | 'I' | 'E' | 'F' | 'T' | 'S' | 'N';

const DIMENSION_PAIRS: { high: Dimension; low: Dimension; name: string }[] = [
  { high: 'J', low: 'P', name: 'J' },
  { high: 'I', low: 'E', name: 'I' },
  { high: 'F', low: 'T', name: 'F' },
  { high: 'S', low: 'N', name: 'S' },
];

export function calculateScore(
  answers: Record<number, number>,
  questions: { id: number; options: { scores: Record<string, number> } }[]
): ScoreResult {
  const rawScores = {
    J: 0,
    P: 0,
    I: 0,
    E: 0,
    F: 0,
    T: 0,
    S: 0,
    N: 0
  };

  console.log('=== calculateScore called ===');
  console.log('answers:', answers);
  console.log('questions count:', questions.length);

  let processedCount = 0;
  questions.forEach(question => {
    const answerIndex = answers[question.id];
    console.log(`question ${question.id}: answerIndex = ${answerIndex}`);
    if (answerIndex !== undefined && question.options[answerIndex]) {
      const optionScores = question.options[answerIndex].scores;
      console.log(`  option ${answerIndex} scores:`, optionScores);
      Object.keys(optionScores).forEach(dim => {
        rawScores[dim as Dimension] += optionScores[dim as Dimension];
      });
      processedCount++;
    } else {
      console.log(`  -> SKIPPED (no answer or invalid option)`);
    }
  });

  console.log('rawScores:', rawScores);
  console.log('processedCount:', processedCount);

  const finalScores = {
    J: rawScores.J - rawScores.P,
    I: rawScores.I - rawScores.E,
    F: rawScores.F - rawScores.T,
    S: rawScores.S - rawScores.N
  };

  console.log('finalScores:', finalScores);

  const code =
    (finalScores.J > 0 ? 'J' : 'P') +
    (finalScores.I > 0 ? 'I' : 'E') +
    (finalScores.F > 0 ? 'F' : 'T') +
    (finalScores.S > 0 ? 'S' : 'N');

  console.log('final code:', code);

  return { code, scores: finalScores };
}

export function calculateAlternativeResult(
  currentCode: string,
  questions: Question[],
  originalAnswers: Record<number, number>
): AlternativeResult {
  const currentChar = {
    J: currentCode[0],
    I: currentCode[1],
    F: currentCode[2],
    S: currentCode[3]
  };

  const oppositeChar = {
    J: currentCode[0] === 'J' ? 'P' : 'J',
    I: currentCode[1] === 'I' ? 'E' : 'I',
    F: currentCode[2] === 'F' ? 'T' : 'F',
    S: currentCode[3] === 'S' ? 'N' : 'S'
  };

  const targetCode = oppositeChar.J + oppositeChar.I + oppositeChar.F + oppositeChar.S;
  const targetType = NMTI_TYPES[targetCode];

  const keyDifferences: string[] = [];

  return {
    code: targetCode,
    name: targetType?.name || '神秘牛马',
    description: targetType?.description || '这是一头神秘的牛马，可能还没被发现。',
    keyDifferences
  };
}

export function getAllAlternativeResults(
  currentCode: string,
  questions: Question[],
  originalAnswers: Record<number, number>
): AlternativeResult[] {
  const results: AlternativeResult[] = [];

  const currentChar = {
    J: currentCode[0],
    I: currentCode[1],
    F: currentCode[2],
    S: currentCode[3]
  };

  DIMENSION_PAIRS.forEach(pair => {
    const oppositeCode =
      (pair.name === 'J' ? (currentChar.J === 'J' ? 'P' : 'J') : currentChar.J) +
      (pair.name === 'I' ? (currentChar.I === 'I' ? 'E' : 'I') : currentChar.I) +
      (pair.name === 'F' ? (currentChar.F === 'F' ? 'T' : 'F') : currentChar.F) +
      (pair.name === 'S' ? (currentChar.S === 'S' ? 'N' : 'S') : currentChar.S);

    if (oppositeCode !== currentCode) {
      const alt = calculateAlternativeResult(currentCode, questions, originalAnswers);
      const targetType = NMTI_TYPES[oppositeCode];
      if (targetType) {
        results.push({
          code: oppositeCode,
          name: targetType.name,
          description: targetType.description,
          keyDifferences: alt.keyDifferences
        });
      }
    }
  });

  return results.slice(0, 3);
}