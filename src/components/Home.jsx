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
            <p className="text-white/40 text-sm">
              16道题 · 2分钟 · 揭晓你的牛马属性
            </p>
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
