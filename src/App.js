import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Game from './components/Game.js';

export default function App() {

  const [gameId, setgameId] = useState(0);
  console.log(gameId);

  return (
    <Game itemsNumber={6} timeLevel={10} key={gameId} setgameId={setgameId} />
  );
}

