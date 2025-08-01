/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

interface TiraFaceProps {
  isTalking: boolean;
  isListening: boolean;
  isProcessing: boolean;
}

const TiraFace: React.FC<TiraFaceProps> = ({ isTalking, isListening, isProcessing }) => {
  const [hoverPosition, setHoverPosition] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      
      // Floating animation
      setHoverPosition(Math.sin(elapsed * 0.002) * 3);
      
      // Tilt animation when talking
      if (isTalking) {
        setTiltAngle(Math.sin(elapsed * 0.005) * 5);
      } else {
        setTiltAngle(0);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isTalking]);

  const getEmoji = () => {
    if (isTalking) return '😊'; // Happy when talking
    if (isListening) return '👂'; // Ear when listening
    if (isProcessing) return '🤔'; // Thinking when processing
    return '🤠'; // Default cowboy
  };

  return (
    <div
      className="text-4xl transition-all duration-300 select-none"
      style={{
        transform: `translateY(${hoverPosition}px) rotate(${tiltAngle}deg) scale(${
          isTalking ? 1.1 : isListening ? 1.05 : 1
        })`,
        filter: isTalking ? 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))' : 'none'
      }}
    >
      {getEmoji()}
    </div>
  );
};

export default TiraFace;