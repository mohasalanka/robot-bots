import React from 'react';
import Bot from './Bot';



const BotCollection = ({ bots = [], onEnlist, sort }) => {
  const sortedBots = [...bots].sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'type') {
      return a.type.localeCompare(b.type);
    } else if (sort === 'ability') {
      return a.abilities.length - b.abilities.length;
    } else {
      return 0;
    }
  });
  console.log(sortedBots);

  return (
    <div className="bot-collection">
      {sortedBots.map(bot => (
        <Bot key={bot.id} bot={bot} onEnlist={onEnlist}/> 
      ))}
    </div>
  );
};

export default BotCollection;
