import React, { useEffect, useRef, useState } from 'react';

// No props needed, so remove interface
const colorStops = [
  '#3b82f6', // blue-500
  '#0ea5e9', // sky-500
  '#38bdf8', // sky-400
  '#2563eb', // blue-600
  '#60a5fa', // blue-400
  '#0ea5e9', // sky-500
];

function isMobile() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const SmokeyCursor: React.FC<unknown> = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  // Removed unused colorIndex
  const colorTime = useRef(0);
  const frameCount = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined' || isMobile()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    function lerpColor(a: string, b: string, t: number) {
      const ah = a.replace('#', '');
      const bh = b.replace('#', '');
      const ar = parseInt(ah.substring(0, 2), 16), ag = parseInt(ah.substring(2, 4), 16), ab = parseInt(ah.substring(4, 6), 16);
      const br = parseInt(bh.substring(0, 2), 16), bg = parseInt(bh.substring(2, 4), 16), bb = parseInt(bh.substring(4, 6), 16);
      const rr = Math.round(lerp(ar, br, t));
      const rg = Math.round(lerp(ag, bg, t));
      const rb = Math.round(lerp(ab, bb, t));
      return `rgba(${rr},${rg},${rb},0.55)`;
    }

    const draw = () => {
      frameCount.current++;
      if (frameCount.current % 2 === 0) { // Throttle: update every 2 frames
        colorTime.current += 0.012;
        const idx = Math.floor(colorTime.current) % colorStops.length;
        const nextIdx = (idx + 1) % colorStops.length;
        const t = colorTime.current % 1;
        const animatedColor = lerpColor(colorStops[idx], colorStops[nextIdx], t);
        trail.current.x = lerp(trail.current.x, mouse.current.x, 0.18);
        trail.current.y = lerp(trail.current.y, mouse.current.y, 0.18);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.globalAlpha = 0.38;
        ctx.beginPath();
        ctx.arc(trail.current.x, trail.current.y, 38, 0, 2 * Math.PI);
        ctx.fillStyle = animatedColor;
        ctx.shadowColor = animatedColor;
        ctx.shadowBlur = 38;
        ctx.fill();
        ctx.restore();
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = prevCursor;
    };
  }, [mounted]);

  if (!mounted || typeof window === 'undefined' || isMobile()) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'lighten',
      }}
    />
  );
};

export default SmokeyCursor; 