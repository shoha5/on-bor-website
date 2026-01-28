import React from 'react';
import './RoadmapSection.css';

const RoadmapSection = () => {
  const expansionData = [
    { city: 'Tashkent', businessCount: 120 },
    { city: 'Samarkand', businessCount: 80 },
    { city: 'Fergana', businessCount: 60 },
    { city: 'Bukhara', businessCount: 50 },
  ];

  return (
    <div className="roadmap-section">
      <h2>Roadmap Expansion</h2>
      <ol className="timeline">
        {expansionData.map((data, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{data.city}</h3>
              <p>{data.businessCount} businesses</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RoadmapSection;
