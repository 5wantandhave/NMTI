import React, { useState } from 'react';
import { NMTIType } from '../types';
import { RadarChart } from './RadarChart';
import { getAllAlternativeResults, AlternativeResult } from '../utils/calculate';
import { QUESTIONS } from '../data/questions';

interface ResultProps {
  typeCode: string;
  typeInfo: NMTIType;
  scores: {
    J: number;
    I: number;
    F: number;
    S: number;
  };
  answers: Record<number, number>;
  onRestart: () => void;
}

export const Result: React.FC<ResultProps> = ({ typeCode, typeInfo, scores, answers, onRestart }) => {
  const [showAlternative, setShowAlternative] = useState(false);
  const [altResults, setAltResults] = useState<AlternativeResult[]>([]);
  const [selectedAlt, setSelectedAlt] = useState<AlternativeResult | null>(null);

  const handleShare = async () => {
    const shareText = `🐴 我的NMTI结果是【${typeCode} ${typeInfo.name}】！

${typeInfo.description.slice(0, 50)}...

快来测试你是哪种牛马 👉`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'NMTI - 牛马TI测试',
          text: shareText,
        });
      } catch (err) {
        copyToClipboard(shareText);
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('结果已复制到剪贴板！');
    });
  };

  const handleReverseDestiny = () => {
    const alternatives = getAllAlternativeResults(typeCode, QUESTIONS, answers);
    setAltResults(alternatives);
    setShowAlternative(true);
  };

  const handleSelectAlt = (alt: AlternativeResult) => {
    setSelectedAlt(alt);
  };

  const handleBack = () => {
    setShowAlternative(false);
    setSelectedAlt(null);
  };

  if (showAlternative && selectedAlt) {
    const altScores = {
      J: selectedAlt.code[0] === 'J' ? 8 : -8,
      I: selectedAlt.code[1] === 'I' ? 8 : -8,
      F: selectedAlt.code[2] === 'F' ? 8 : -8,
      S: selectedAlt.code[3] === 'S' ? 8 : -8
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-cyber flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-md w-full text-center">
          <button
            onClick={handleBack}
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
          >
            ← 返回
          </button>

          <div className="mb-6">
            <p className="text-xs text-pink mb-2">✨ 逆天改命 - 平行世界的你</p>
            <div className="inline-block bg-gradient-to-r from-pink/20 to-accent/20 rounded-2xl px-8 py-4 border border-pink/30">
              <p className="text-4xl font-bold text-pink mb-1">{selectedAlt.code}</p>
              <p className="text-xl font-semibold text-white">{selectedAlt.name}</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
            <RadarChart scores={altScores} />
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10 text-left">
            <div className="bg-gradient-to-r from-pink/10 to-accent/10 rounded-xl p-4 border border-pink/20 mb-4">
              <p className="text-xs text-pink mb-2">🔮 改变的关键</p>
              <ul className="space-y-1">
                {selectedAlt.keyDifferences.map((diff, index) => (
                  <li key={index} className="text-sm text-white flex items-start gap-2">
                    <span className="text-pink">•</span>
                    {diff}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedAlt.description.slice(0, 100)}...
            </p>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            如果你当初做了不同的选择...
          </p>

          <button
            onClick={handleBack}
            className="w-full py-3 px-6 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            返回真实结果 🔙
          </button>
        </div>
      </div>
    );
  }

  if (showAlternative && altResults.length > 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-cyber flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-md w-full text-center">
          <button
            onClick={handleBack}
            className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
          >
            ← 返回
          </button>

          <div className="mb-8">
            <p className="text-xs text-gray-400 mb-2">✨ 逆天改命</p>
            <h2 className="text-2xl font-bold text-white mb-2">如果当初选择不同...</h2>
            <p className="text-sm text-gray-400">平行世界的你，会是哪种牛马？</p>
          </div>

          <div className="space-y-3 mb-6">
            {altResults.map((alt, index) => (
              <button
                key={index}
                onClick={() => handleSelectAlt(alt)}
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 hover:border-pink/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-pink">{alt.code}</span>
                  <div>
                    <p className="text-white font-medium">{alt.name}</p>
                    <p className="text-xs text-gray-400">
                      {alt.keyDifferences[0] || '完全不同的选择'}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleBack}
            className="w-full py-3 px-6 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            算了，还是做自己吧 😌
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-cyber flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        <div className="mb-6">
          <p className="text-xs text-gray-400 mb-2">你的牛马类型是</p>
          <div className="inline-block bg-gradient-to-r from-accent/20 to-pink/20 rounded-2xl px-8 py-4 border border-accent/30">
            <p className="text-4xl font-bold text-accent mb-1">{typeCode}</p>
            <p className="text-xl font-semibold text-white">{typeInfo.name}</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
          <RadarChart scores={scores} />
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10 text-left">
          <p className="text-gray-300 leading-relaxed mb-4">{typeInfo.description}</p>

          <div className="border-t border-white/10 pt-4 mb-4">
            <h3 className="text-sm font-medium text-pink mb-2">典型特征</h3>
            <ul className="space-y-1">
              {typeInfo.characteristics.map((char, index) => (
                <li key={index} className="text-xs text-gray-400 flex items-start gap-2">
                  <span className="text-accent">•</span>
                  {char}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-pink/10 rounded-xl p-4 border border-accent/20">
            <p className="text-xs text-gray-400 mb-1">💝 今日开心彩蛋</p>
            <p className="text-sm text-white">{typeInfo.luckyTip}</p>
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={handleReverseDestiny}
            className="w-full py-3 px-6 bg-gradient-to-r from-pink/80 to-accent/80 text-white font-medium rounded-xl shadow-lg hover:shadow-pink/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            ✨ 逆天改命 - 看平行世界的自己
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onRestart}
            className="flex-1 py-3 px-6 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            再测一次 🔄
          </button>
          <button
            onClick={handleShare}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-accent to-pink text-white font-medium rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
          >
            分享结果 📤
          </button>
        </div>
      </div>
    </div>
  );
};