import { useState, useMemo } from 'react';
import { calculateNMTI, NMTI_TYPES } from '../data/nmtiTypes.js';
import { QUESTIONS } from '../data/questions.js';

function Result({ rawScores, answers, onRestart }) {
  const result = calculateNMTI(rawScores);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [tempAnswers, setTempAnswers] = useState({ ...answers });
  const [showComparison, setShowComparison] = useState(false);

  const tempResult = useMemo(() => {
    const tempScores = { JP: 0, IE: 0, FT: 0, SN: 0 };
    Object.entries(tempAnswers).forEach(([index, answer]) => {
      const q = QUESTIONS[parseInt(index)];
      if (!q) return;
      const opt = q.options[answer];
      if (!opt) return;
      tempScores.JP += opt.scores.JP || 0;
      tempScores.IE += opt.scores.IE || 0;
      tempScores.FT += opt.scores.FT || 0;
      tempScores.SN += opt.scores.SN || 0;
    });
    return calculateNMTI(tempScores);
  }, [tempAnswers]);

  const radarData = [
    { label: '卷/J', value: Math.max(0, Math.min(100, ((rawScores.JP + 16) / 32) * 100)), original: rawScores.JP },
    { label: '内耗/I', value: Math.max(0, Math.min(100, ((rawScores.IE + 16) / 32) * 100)), original: rawScores.IE },
    { label: '付出/F', value: Math.max(0, Math.min(100, ((rawScores.FT + 16) / 32) * 100)), original: rawScores.FT },
    { label: '务实/S', value: Math.max(0, Math.min(100, ((rawScores.SN + 16) / 32) * 100)), original: rawScores.SN }
  ];

  const maxValue = 100;
  const centerX = 150;
  const centerY = 150;
  const radius = 100;

  const getPoint = (value, index, total) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const distance = (value / maxValue) * radius;
    return {
      x: centerX + distance * Math.cos(angle),
      y: centerY + distance * Math.sin(angle)
    };
  };

  const polygonPoints = radarData.map((d, i) => {
    const p = getPoint(d.value, i, radarData.length);
    return `${p.x},${p.y}`;
  }).join(' ');

  const gridLevels = [25, 50, 75, 100];
  const gridPolygons = gridLevels.map(level => {
    return radarData.map((d, i) => {
      const p = getPoint(level, i, radarData.length);
      return `${p.x},${p.y}`;
    }).join(' ');
  });

  const handleQuestionSelect = (qId) => {
    setSelectedQuestion(qId);
    setTempAnswers({ ...answers });
    setShowComparison(false);
  };

  const handleOptionChange = (qId, optIndex) => {
    const newAnswers = { ...tempAnswers, [qId]: optIndex };
    setTempAnswers(newAnswers);
    setShowComparison(true);
  };

  const changeNeeded = selectedQuestion !== null && showComparison
    ? tempResult.code !== result.code
      ? `改变选项后，你将从 ${result.code} 进化为 ${tempResult.code}！`
      : `选择这个选项，你的类型依然是 ${tempResult.code}`
    : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">审判结果</h1>
          <p className="text-white/60">你的牛马属性是...</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-2">
                {result.code}
              </div>
              <div className="text-xl font-bold text-white">
                {result.type.name}
              </div>
            </div>

            <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto">
              <polygon
                points={gridPolygons[0]}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <polygon
                points={gridPolygons[1]}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
              <polygon
                points={gridPolygons[2]}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <polygon
                points={gridPolygons[3]}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />

              {[0, 1, 2, 3].map(i => {
                const endpoint = getPoint(100, i, 4);
                return (
                  <line
                    key={i}
                    x1={centerX}
                    y1={centerY}
                    x2={endpoint.x}
                    y2={endpoint.y}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                );
              })}

              <polygon
                points={polygonPoints}
                fill="url(#gradient)"
                fillOpacity="0.4"
                stroke="url(#gradient)"
                strokeWidth="2"
              />

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {radarData.map((d, i) => {
                const point = getPoint(d.value, i, 4);
                const labelPos = getPoint(115, i, 4);
                return (
                  <g key={i}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill="#fbbf24"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {d.label} ({d.original > 0 ? '+' : ''}{d.original})
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📊</span> 类型解读
            </h3>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p className="bg-white/5 rounded-xl p-3">
                <span className="text-yellow-400 font-bold">核心特征：</span>
                {result.type.traits.join(' · ')}
              </p>
              <p className="bg-white/5 rounded-xl p-3">
                <span className="text-pink-400 font-bold">性格画像：</span>
                {result.type.description}
              </p>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-purple-400 font-bold mb-2">各维度得分：</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>卷度(J/P): <span className={rawScores.JP >= 0 ? 'text-green-400' : 'text-red-400'}>{rawScores.JP > 0 ? '+' : ''}{rawScores.JP}</span></div>
                  <div>内耗(I/E): <span className={rawScores.IE >= 0 ? 'text-green-400' : 'text-red-400'}>{rawScores.IE > 0 ? '+' : ''}{rawScores.IE}</span></div>
                  <div>付出(F/T): <span className={rawScores.FT >= 0 ? 'text-green-400' : 'text-red-400'}>{rawScores.FT > 0 ? '+' : ''}{rawScores.FT}</span></div>
                  <div>务实(S/N): <span className={rawScores.SN >= 0 ? 'text-green-400' : 'text-red-400'}>{rawScores.SN > 0 ? '+' : ''}{rawScores.SN}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-yellow-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-2xl">🧬</span> 逆天改命 - 如果你当初选了...
          </h3>
          <p className="text-white/60 text-sm mb-4">
            选择一道题，改变你的答案，看看你的牛马属性会如何进化
          </p>

          {selectedQuestion === null ? (
            <div className="grid grid-cols-4 gap-2">
              {QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleQuestionSelect(q.id - 1)}
                  className="bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-3 rounded-lg transition"
                >
                  第{q.id}题
                </button>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-3">
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="text-white/60 text-sm hover:text-white"
                >
                  ← 返回题目列表
                </button>
                <span className="text-white/40 text-xs">第{selectedQuestion + 1}题</span>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-white text-sm mb-3">{QUESTIONS[selectedQuestion].question}</p>
                <div className="space-y-2">
                  {QUESTIONS[selectedQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionChange(selectedQuestion, idx)}
                      className={`w-full text-left p-3 rounded-lg text-sm transition ${
                        tempAnswers[selectedQuestion] === idx
                          ? 'bg-yellow-500/30 border border-yellow-400 text-white'
                          : 'bg-white/5 hover:bg-white/10 text-white/70'
                      }`}
                    >
                      <span className="font-bold">{String.fromCharCode(65 + idx)}.</span> {opt.text}
                    </button>
                  ))}
                </div>
              </div>

              {showComparison && (
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/80 text-sm mb-2">{changeNeeded}</p>
                  {tempResult.code !== result.code && (
                    <div className="text-lg font-bold">
                      <span className="text-white/60 line-through mr-2">{result.code}</span>
                      <span className="text-green-400">→</span>
                      <span className="text-yellow-400 ml-2">{tempResult.code}</span>
                      <span className="text-green-400 ml-2">{tempResult.type.name}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition"
          >
            重新测试
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
