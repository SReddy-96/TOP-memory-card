import "../styles/App.css";
import Header from "./header.jsx";
import Main from "./main.jsx";
import CurrentScoreShow from "./currentScoreShow.jsx";
import HighScoreShow from "./highScoreShow.jsx";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header />
      <Main
        highScore={highScore}
        setHighScore={setHighScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />
      <div id="scoreWrapper">
        <CurrentScoreShow currentScore={currentScore} />
        <HighScoreShow highScore={highScore} />
      </div>
    </>
  );
}

export default App;
