import React, { useState, useEffect } from 'react';
import '../styles/GridOverlay.css';

const GridOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle overlay with 'G' key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'g' || event.key === 'G') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Generate grid lines every 5% of screen height
  const generateGridLines = () => {
    const lines = [];
    for (let i = 0; i <= 100; i += 5) {
      lines.push(
        <div
          key={i}
          className="grid-line"
          style={{ top: `${i}%` }}
        >
          <span className="grid-label">{i}%</span>
        </div>
      );
    }
    return lines;
  };

  return (
    <>
      <button 
        className="overlay-toggle"
        onClick={() => setIsVisible(!isVisible)}
        title="Toggle grid overlay (Press G)"
      >
        {isVisible ? 'Hide Grid' : 'Show Grid'}
      </button>
      {isVisible && (
        <div className="grid-overlay">
          {generateGridLines()}
        </div>
      )}
    </>
  );
};

export default GridOverlay;
