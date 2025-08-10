import React, { useState, useRef, useCallback, useEffect, MutableRefObject } from 'react';

const phases = [
  { name: 'starting', duration: 60, message: 'Starting Position Analysis', score: 92 },
  { name: 'curling', duration: 80, message: 'Concentric Phase - Range of Motion', score: 85 },
  { name: 'peak', duration: 40, message: 'Peak Contraction - Perfect Hold!', score: 95 },
  { name: 'lowering', duration: 80, message: 'Eccentric Phase - Controlled Descent', score: 88 },
  { name: 'complete', duration: 60, message: 'Analysis Complete - 89% Overall', score: 89 }
];

const useCanvasAnimation = (canvasRef: MutableRefObject<HTMLCanvasElement | null>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [phaseFrame, setPhaseFrame] = useState(0);
  const [bicepAngle, setBicepAngle] = useState(Math.PI / 2);
  const [refBicepAngle, setRefBicepAngle] = useState(Math.PI / 2);
  const [formScore, setFormScore] = useState(92);
  const animationRef = useRef(null);

  const drawBackground = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 500, 300);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 300);
  };

  const drawSplitScreen = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(20, 40, 220, 180);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.strokeRect(20, 40, 220, 180);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(260, 40, 220, 180);
    ctx.strokeRect(260, 40, 220, 180);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Your Form', 130, 30);
    ctx.fillText('Reference Video', 370, 30);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(`${formScore}% Form Score`, 130, 235);
    ctx.fillStyle = '#90EE90';
    ctx.fillText('@fitinfluencer', 370, 235);
  };

  const drawStickFigure = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    armAngle: number,
    isReference = false
  ) => {
    ctx.strokeStyle = isReference ? '#90EE90' : '#ffd700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y + 8);
    ctx.lineTo(x, y + 60);
    ctx.stroke();
    const shoulderY = y + 25;
    const elbowX = x + 20;
    const handX = elbowX + Math.cos(armAngle) * 20;
    const handY = shoulderY + Math.sin(armAngle) * 20;
    ctx.beginPath();
    ctx.moveTo(x, shoulderY);
    ctx.lineTo(elbowX, shoulderY);
    ctx.lineTo(handX, handY);
    ctx.stroke();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillRect(handX - 3, handY - 3, 6, 6);
  };

  const drawAnalysisPanel = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(20, 240, 460, 50);
    const currentPhase = phases[currentPhaseIndex];
    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(currentPhase.message, 30, 258);
    ctx.fillStyle = '#ffd700';
    ctx.font = '12px Arial';
    ctx.fillText(`Current Score: ${currentPhase.score}%`, 30, 275);
  };

  const updateAnimation = () => {
    const currentPhase = phases[currentPhaseIndex];
    switch (currentPhase.name) {
      case 'starting':
        setBicepAngle(Math.PI / 2);
        setRefBicepAngle(Math.PI / 2);
        setFormScore(92);
        break;
      case 'curling': {
        const curlProgress = phaseFrame / currentPhase.duration;
        setBicepAngle(Math.PI / 2 + (Math.PI / 3) * curlProgress);
        setRefBicepAngle(Math.PI / 2 + (Math.PI / 2.5) * curlProgress);
        setFormScore(85);
        break;
      }
      case 'peak':
        setBicepAngle(Math.PI / 2 + Math.PI / 3);
        setRefBicepAngle(Math.PI / 2 + Math.PI / 2.5);
        setFormScore(95);
        break;
      case 'lowering': {
        const lowerProgress = phaseFrame / currentPhase.duration;
        setBicepAngle((Math.PI / 2 + Math.PI / 3) - (Math.PI / 3) * lowerProgress);
        setRefBicepAngle((Math.PI / 2 + Math.PI / 2.5) - (Math.PI / 2.5) * lowerProgress);
        setFormScore(88);
        break;
      }
      case 'complete':
        setBicepAngle(Math.PI / 2);
        setRefBicepAngle(Math.PI / 2);
        setFormScore(89);
        break;
    }
    setPhaseFrame(prev => {
      const newFrame = prev + 1;
      if (newFrame >= currentPhase.duration) {
        setCurrentPhaseIndex(prevIndex => (prevIndex + 1) % phases.length);
        return 0;
      }
      return newFrame;
    });
  };

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 500, 300);
    drawBackground(ctx);
    drawSplitScreen(ctx);
    drawStickFigure(ctx, 130, 80, bicepAngle, false);
    drawStickFigure(ctx, 370, 80, refBicepAngle, true);
    drawAnalysisPanel(ctx);
  }, [canvasRef, bicepAngle, refBicepAngle, formScore, currentPhaseIndex]);

  const animate = useCallback(() => {
    if (!isPlaying) return;
    draw();
    updateAnimation();
  animationRef.current = requestAnimationFrame(animate) as unknown as null;
  }, [isPlaying, draw]);

  const startAnimation = () => setIsPlaying((prev) => !prev);

  // Start/stop animation effect
  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate) as unknown as null;
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, animate]);

  // Initial draw
  useEffect(() => {
    draw();
  }, []);

  return {
    isPlaying,
    startAnimation,
    bicepAngle,
    refBicepAngle,
    formScore,
    draw,
  };
};

export default useCanvasAnimation;
