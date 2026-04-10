import React from 'react';

interface RadarChartProps {
  scores: {
    J: number;
    I: number;
    F: number;
    S: number;
  };
}

export const RadarChart: React.FC<RadarChartProps> = ({ scores }) => {
  const size = 200;
  const center = size / 2;
  const maxRadius = 80;

  const maxScore = 14;
  const minScore = -14;

  const dimensions = [
    { key: 'J', label: '卷/摸', value: scores.J, angle: -90 },
    { key: 'I', label: '耗/放', value: scores.I, angle: -18 },
    { key: 'F', label: '付/理', value: scores.F, angle: 54 },
    { key: 'S', label: '实/幻', value: scores.S, angle: 126 }
  ];

  const getPoint = (value: number, angle: number) => {
    const normalizedValue = ((value - minScore) / (maxScore - minScore)) * 2 - 1;
    const radius = Math.abs(normalizedValue) * maxRadius;
    const radian = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(radian),
      y: center + radius * Math.sin(radian)
    };
  };

  const getColor = (value: number) => {
    if (value > 5) return '#e94560';
    if (value > 0) return '#ff6b9d';
    if (value > -5) return '#4facfe';
    return '#00f2fe';
  };

  const polygonPoints = dimensions
    .map(dim => {
      const point = getPoint(dim.value, dim.angle);
      return `${point.x},${point.y}`;
    })
    .join(' ');

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-0">
        <defs>
          <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e94560" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e94560" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {[0.25, 0.5, 0.75, 1].map(scale => (
          <polygon
            key={scale}
            points={dimensions
              .map(dim => {
                const angle = dim.angle;
                const radian = (angle * Math.PI) / 180;
                const r = maxRadius * scale;
                return `${center + r * Math.cos(radian)},${center + r * Math.sin(radian)}`;
              })
              .join(' ')}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        ))}

        {dimensions.map(dim => {
          const angle = dim.angle;
          const radian = (angle * Math.PI) / 180;
          return (
            <line
              key={dim.key}
              x1={center}
              y1={center}
              x2={center + maxRadius * Math.cos(radian)}
              y2={center + maxRadius * Math.sin(radian)}
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1"
            />
          );
        })}

        <polygon
          points={polygonPoints}
          fill="url(#radarGradient)"
          stroke="#e94560"
          strokeWidth="2"
          strokeOpacity="0.8"
        />

        {dimensions.map(dim => {
          const point = getPoint(dim.value, dim.angle);
          return (
            <circle
              key={dim.key}
              cx={point.x}
              cy={point.y}
              r="5"
              fill={getColor(dim.value)}
              stroke="#ffffff"
              strokeWidth="2"
            />
          );
        })}
      </svg>

      <div className="grid grid-cols-2 gap-4 mt-4 text-center">
        {dimensions.map(dim => (
          <div key={dim.key} className="text-sm">
            <span className="text-gray-400">{dim.label}</span>
            <div
              className="text-lg font-bold"
              style={{ color: getColor(dim.value) }}
            >
              {dim.value > 0 ? '+' : ''}{dim.value.toFixed(1)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-500 flex gap-4">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#e94560]"></span>高分
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#ff6b9d]"></span>偏高
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#4facfe]"></span>偏低
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>低分
        </span>
      </div>
    </div>
  );
};