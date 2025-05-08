
import React from 'react';

interface ScrollProgressBarProps {
  scrollProgress: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ scrollProgress }) => {
  return (
    <div className="progress-container">
      <div 
        className="progress-bar" 
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
