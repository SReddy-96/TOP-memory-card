import "../styles/lost.css";

function Lost({ resetGame }) {
  return (
    <div id="lost">
      <h1>You Lose</h1>
      <img id="loseDogImage" src="./loseDog.jpg" alt="dog image" />
      <button onClick={resetGame} id="resetGameButton">
        Reset Game
      </button>
    </div>
  );
}

export default Lost;
