import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <Header></Header>
      <div id="game-container">
        <ol id="players">
          <Player initName={"Player 1"} symbol={"X"} />
          <Player initName={"Player 2"} symbol={"0"} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
