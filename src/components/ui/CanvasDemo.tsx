import React, { useRef } from 'react';
import useCanvasAnimation from '../../hooks/useCanvasAnimation';

const CanvasDemo: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const {
    isPlaying,
    startAnimation,
    bicepAngle,
    refBicepAngle,
    formScore,
    draw,
  } = useCanvasAnimation(canvasRef);

  React.useEffect(() => {
    if (canvasRef.current) {
      draw();
    }
  }, [bicepAngle, refBicepAngle, formScore, draw]);

  return (
    <div className="relative max-w-md mx-auto rounded-xl overflow-hidden shadow-xl">
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        className="w-full h-auto block rounded-xl"
      />
      <div className="absolute top-3 right-3 bg-indigo-600/90 text-white px-3 py-1 rounded-md text-xs font-semibold">
        LIVE DEMO
      </div>
      <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-md text-xs">
        ME Vs ME Compare Analysis
      </div>
      <button
        onClick={startAnimation}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600/90 text-white border-none rounded-full w-15 h-15 text-xl cursor-pointer flex items-center justify-center p-4 hover:bg-indigo-700/90 transition-colors"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
};

export default CanvasDemo;
