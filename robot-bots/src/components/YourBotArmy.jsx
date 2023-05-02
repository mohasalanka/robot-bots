import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ bots }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map(bot => (
          <Bot key={bot.id} bot={bot} />
        ))}
      </ul>
    </div>
  );
};

export default YourBotArmy;
