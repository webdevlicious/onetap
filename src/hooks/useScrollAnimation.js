import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Custom hook to handle infinite scroll animation with touch controls
 * @param {Object} options - Configuration options
 * @param {string} options.direction - Scroll direction ('left' or 'right')
 * @param {number} options.speed - Animation speed in pixels per second
 * @param {number} options.pauseDuration - How long to pause after touch in ms
 */
export const useScrollAnimation = ({ 
  direction = 'left',
  speed = 50,
  pauseDuration = 2000 
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef(null);
  const lastTimestampRef = useRef(0);

  // Handle animation frame
  const animate = useCallback((timestamp) => {
    if (!lastTimestampRef.current) {
      lastTimestampRef.current = timestamp;
    }

    const elapsed = timestamp - lastTimestampRef.current;
    const delta = (speed * elapsed) / 1000;

    if (!isPaused) {
      setTranslateX(prev => {
        const newValue = prev + (direction === 'left' ? -delta : delta);
        // Reset when full width is scrolled
        if (Math.abs(newValue) > 100) {
          return 0;
        }
        return newValue;
      });
    }

    lastTimestampRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [direction, speed, isPaused]);

  // Initialize animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    setIsPaused(true);
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchStart) return;
    const touchDelta = e.touches[0].clientX - touchStart;
    setTranslateX(prev => prev + touchDelta);
    setTouchStart(e.touches[0].clientX);
  }, [touchStart]);

  const handleTouchEnd = useCallback(() => {
    setTouchStart(null);
    setTimeout(() => setIsPaused(false), pauseDuration);
  }, [pauseDuration]);

  return {
    translateX,
    isPaused,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false)
    }
  };
};