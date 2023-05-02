import React from "react";
import BotSpecs from "./BotSpecs";

const Bot = ({ bot, enlistBot }) => {
  const { id, title, imageUrl, specs } = bot;

  const handleClick = () => {
    enlistBot(id);
  };

  return (
    <div className="bot">
      <div className="bot-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="bot-details">
        <div className="bot-title">{title}</div>
        <BotSpecs specs={specs} />
        <button className="bot-enlist-button" onClick={handleClick}>
          Enlist
        </button>
      </div>
    </div>
  );
};

export default Bot;
