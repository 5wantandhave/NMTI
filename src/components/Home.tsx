import React from 'react';

interface HomeProps {
  onStart: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-cyber flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink via-accent to-cyber bg-clip-text text-transparent">
              牛马TI测试
            </h1>
            <a
              href="https://github.com/5wantandhave/NMTI.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            MBTI太体面，SBTI太抽象
            <br />
            <span className="text-accent font-semibold">NMTI</span>直接给你牛马本马
            <br />
            测完笑出腹肌，生活继续开心！
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
          <h2 className="text-sm font-medium text-gray-400 mb-3">你是哪种牛马？</h2>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
            <span>🏃 996死者卷王</span>
            <span>😴 理性摸鱼死者</span>
            <span>🤡 社牛付出卷王</span>
            <span>🧘 摸鱼社牛神仙</span>
          </div>
          <p className="text-gray-600 text-xs mt-3">...共16种牛马类型</p>
        </div>

        <button
          onClick={onStart}
          className="w-full py-4 px-8 bg-gradient-to-r from-accent to-pink text-white font-bold text-lg rounded-xl shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          测测你是哪头牛马 🐴
        </button>

        <div className="mt-8 text-xs text-gray-500 space-y-1">
          <p>⏱️ 约3-6分钟 · 40道题 · 16种结果</p>
          <p>🔒 纯本地测试，数据不上传</p>
        </div>
      </div>
    </div>
  );
};