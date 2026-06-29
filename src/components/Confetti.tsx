import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export function Confetti({ trigger }: { trigger: boolean }) {
  useEffect(() => {
    if (!trigger) return;
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#4f46e5','#f59e0b','#10b981','#ef4444','#8b5cf6'] });
  }, [trigger]);
  return null;
}
