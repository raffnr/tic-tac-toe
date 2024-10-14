import { useState } from "react";
import GameBoard from "./components/GameBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-mainBg min-h-screen">
      <h1 className="text-center text-2xl bg-orange-400 w-fit mx-auto mt-10 p-4 rounded-md text-white">
        React Tic-Tac-Toe with Tailwind
      </h1>
      <section id="game-section" className="mt-10">
        <GameBoard />
      </section>
    </main>
  );
}

export default App;
