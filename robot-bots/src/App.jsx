import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import EnlistButton from './components/EnlistButton';
import SortBar from './components/SortBar';
import { getBots} from '../src/assets/data/api';



function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [sort, setSort] = useState('name');

  useEffect(() => {
    const fetchBots = async () => {
      const bots = await getBots();
      setBots(bots);
      console.log(bots);
    };
    fetchBots();
  }, []);

  const enlistBot = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const removeBot = (bot) => {
    const newArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(newArmy);
  };

  const sortBots = (key) => {
    setSort(key);
  };

  return (
    <div className="App">
      <h1>Bot-O-Mat</h1>
      <div className="BotContainer">
        <BotCollection bots={bots} onEnlist={enlistBot} sort={sort} />
        <YourBotArmy bots={yourBotArmy} onRemove={removeBot} />
      </div>
      <div className="SortBarContainer">
        <SortBar sort={sort} onSort={sortBots} />
        <EnlistButton bots={bots} onEnlist={enlistBot} />
      </div>
    </div>
  );
}

export default App;
