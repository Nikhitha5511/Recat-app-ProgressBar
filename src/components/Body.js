import React, { useState, useEffect } from 'react';

const Body = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" >
        <div className="progress" style={{ width: `${progress}%`, borderRadius: '15px' }}>
          {progress > 0 && progress < 100 && <span className="progress-label">{`${progress}%`}</span>}
          {progress === 100 && <span className="complete-label">Complete!</span>}
        </div>
      </div>
      {progress < 100 ? <span className="loading-label">Loading...</span> : null}
    </div>
  );
};

export default Body;