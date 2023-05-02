import React from 'react';

const BotSpecs = ({ specs }) => {
  // const { attack, defense, speed } = specs;
  console.log(specs);
  return (
    <div className="bot-specs">
      <div className="spec">
        <span className="spec-label">Attack:</span>
        <span className="spec-value">{specs.damage}</span>
      </div>
      <div className="spec">
        <span className="spec-label">Defense:</span>
        <span className="spec-value">{specs.armor}</span>
      </div>
      <div className="spec">
        <span className="spec-label">Speed:</span>
        <span className="spec-value">{specs.health}</span>
      </div>
    </div>
  );
};


export default BotSpecs;
