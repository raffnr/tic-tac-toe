const PlayerScore = ({playerName}) => {
  return (
    <div className="bg-cyan-400 w-32 p-4 flex flex-col items-center justify-start rounded-md">
      <p className="text-sm font-medium">{playerName}</p>
      <h1 className="text-4xl font-semibold">0</h1>
    </div>
  );
};

export default PlayerScore;
