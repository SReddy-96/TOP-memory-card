import "../styles/scoreStyling.css";

function HighScoreShow({ highScore }) {
  return <p className="score">High Score: {highScore}</p>;
}
export default HighScoreShow;
