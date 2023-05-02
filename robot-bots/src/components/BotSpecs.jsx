import React from 'react';

const BotSpecs = ({ specs = {} }) => {
  const { attack, defense, speed } = specs;

  return (
    <div className="bot-specs">
      <div className="spec">
        <span className="spec-label">Attack:</span>
        <span className="spec-value">{attack}</span>
      </div>
      <div className="spec">
        <span className="spec-label">Defense:</span>
        <span className="spec-value">{defense}</span>
      </div>
      <div className="spec">
        <span className="spec-label">Speed:</span>
        <span className="spec-value">{speed}</span>
      </div>
    </div>
  );
};


export default BotSpecs;
