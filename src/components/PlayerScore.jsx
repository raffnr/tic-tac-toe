import { useState } from "react";

const PlayerScore = ({ playerName, bgColor = "bg-cyan-400", playerSymbol="draw", activePlayer, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditingClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (evt) => {
    onChangeName(playerSymbol, evt.target.value);
  };

  return (
    <div
      className={`${bgColor} w-32 p-4 flex flex-col items-center justify-start rounded-md ${activePlayer === playerSymbol && "border-2 border-white" }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={playerName}
          className={`bg-white w-11/12 text-center text-sm font-medium`}
          onBlur={handleEditingClick}
          onChange={handleInputChange}
        />
      ) : (
        <p className="text-sm font-medium" onClick={handleEditingClick} id="player-name">
          {playerName}
        </p>
      )}
      <h1 className="text-4xl font-semibold">0</h1>
    </div>
  );
};

export default PlayerScore;
