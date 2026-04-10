import { useState } from 'react';

function Home({ onStart }) {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4">
            NMTI
          </h1>
          <p className="text-2xl text-white/80 font-medium">
            牛马特性测试
          </p>
          <p className="text-lg text-white/50 mt-2">
            你是卷王还是摸鱼大师？
          </p>
        </div>

        {!showIntro ? (
          <div className="space-y-6">
            <button
              onClick={() => setShowIntro(true)}
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/30"
            >
              开始测试
            </button>
            <div className="flex items-center justify-center space-x-2">
              <p className="text-white/40 text-sm">
                16道题 · 2分钟 · 揭晓你的牛马属性
              </p>
              <a 
                href="https://github.com/5wantandhave/NMTI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/70 transition-colors"
                title="查看GitHub项目"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left space-y-4">
            <h2 className="text-xl font-bold text-white text-center mb-4">
              测试说明
            </h2>
            <div className="space-y-3 text-white/80 text-sm">
              <p>
                <span className="text-yellow-400 font-bold">📊 科学算法：</span>
                基于"常模均值切割法"，不是简单的加分减分
              </p>
              <p>
                <span className="text-pink-400 font-bold">🎯 16种类型：</span>
                从"996死者卷王"到"终极快乐神仙"，总有一款适合你
              </p>
              <p>
                <span className="text-purple-400 font-bold">🧮 4大维度：</span>
                卷/摸 · 内耗/外放 · 付出/理智 · 务实/幻想
              </p>
              <p>
                <span className="text-green-400 font-bold">✨ 逆天改命：</span>
                测试结果告诉你如何升级进化
              </p>
            </div>
            <div className="pt-4 text-center">
              <button
                onClick={onStart}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/30"
              >
                准备好了，开始测试
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
