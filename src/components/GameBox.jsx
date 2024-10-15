const GameBox = ({ playersymbol, ...props }) => {
  return (
    <li>
      <button className="w-32 h-32 bg-mainBg rounded-md text-6xl p-2" {...props}>{playersymbol}</button>
    </li>
  );
};

export default GameBox;
