
import React from 'react';

interface StaticMapProps {
  className?: string;
}

const StaticMap: React.FC<StaticMapProps> = ({ className }) => {
  return (
    <div className={className}>
      <img 
        src="https://cdn.mapcreator.io/published/f2e46cf3186f518ec51d3766/map.png" 
        alt="Carte du Domaine du Clochet" 
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default StaticMap;
