import { useState } from "react";

export default function Player({ initName, symbol }) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayer = <span className="player-name">{playerName}</span>;
  let btn = <button onClick={handleEdit}>Edit</button>;

  if (isEditing) {
    editablePlayer = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btn = <button onClick={handleEdit}>Save</button>;
  }
  return (
    <li>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      {btn}
    </li>
  );
}
