import React from "react";
import BotSpecs from "./BotSpecs";
import EnlistButton from "./EnlistButton";

const Bot = ({ bot, enlistBot }) => {
  // const { id, title, imageUrl, specs } = bot;
    console.log(bot);
  const handleClick = () => {
    enlistBot(id);
  };

  return (
    <div className="bot">
      <div className="bot-image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="bot-details">
        <div className="bot-title">{bot.name}</div>
        <BotSpecs specs={bot} />
        <EnlistButton/>
      </div>
    </div>
  );
};

export default Bot;
