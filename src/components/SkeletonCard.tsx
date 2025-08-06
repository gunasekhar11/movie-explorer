import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 flex flex-col items-start animate-pulse">
      <div className="w-full h-70 bg-gray-500/20 rounded mb-3"></div>
      <div className="w-3/4 h-4 bg-gray-500/30 mb-2 rounded"></div>
      <div className="w-1/2 h-3 bg-gray-500/30 mb-2 rounded"></div>
      <div className="w-1/3 h-3 bg-gray-500/30 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
