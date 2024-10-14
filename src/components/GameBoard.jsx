import PlayerScore from "./PlayerScore";

const GameBoard = () => {
  return (
    <div className="w-[500px] h-[600px] bg-boardBg mx-auto rounded-xl">
      <section id="game-score" className="flex gap-6 justify-center py-10">
        <PlayerScore playerName={"Rafi Naufal"}/>
        <PlayerScore playerName={"Draw"}/>
        <PlayerScore playerName={"Player 2"}/>
      </section>
    </div>
  );
};

export default GameBoard;
