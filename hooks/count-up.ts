import { useEffect, useState } from 'react';

export function useCountUp(value: number): number {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (2 * 1000);
      const currentCount = Math.min(0 + progress * (value - 0), value);
      setCount(Math.floor(currentCount));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [0, value, 2]);
  return count;
}
