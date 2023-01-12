import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const Settings = () => {
  const [numPlayers, setNumPlayers] = useState(2);

  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value);
  };

  const [settings, setSettings] = useState({
    difficulty: 'easy',
    sound: true,
  });

  const handleSettingsChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <FormControl>
        <InputLabel id="num-players-label">Number of Players</InputLabel>
        <Select
          labelId="num-players-label"
          id="num-players-select"
          value={numPlayers}
          onChange={handleNumPlayersChange}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel id="difficulty-label">Difficulty</InputLabel>
        <Select
          labelId="difficulty-label"
          id="difficulty-select"
          value={settings.difficulty}
          onChange={handleSettingsChange}
          name="difficulty"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl>
        <InputLabel id="sound-label">Sound</InputLabel>
        <Select
          labelId="sound-label"
          id="sound-select"
          value={settings.sound}
          onChange={handleSettingsChange}
          name="sound"
        >
          <MenuItem value={true}>On</MenuItem>
          <MenuItem value={false}>Off</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default Settings;
