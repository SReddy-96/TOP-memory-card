import Loading from "./loading.jsx";
import Error from "./error.jsx";
import Lost from "./lost.jsx";
import { useEffect, useState } from "react";
import "../styles/main.css";

function Main({ currentScore, setCurrentScore, highScore, setHighScore }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState([]);
  const [isLost, setIsLost] = useState(false);

  const handleClick = (e) => {
    const imageId = e.target.id;
    // check to see if the images has been clicked before
    if (clicked.includes(imageId)) {
      setIsLost(true);
    } else {
      // if new image, set new score and check high score
      setCurrentScore((prevScore) => prevScore + 1);
      if (currentScore + 1 >= highScore) {
        setHighScore(currentScore + 1);
      }
      setClicked((prevClicked) => [...prevClicked, imageId]);
    }
  };

  // reset all states when game is reset
  const resetGame = () => {
    setIsLost(false);
    setCurrentScore(0);
    setClicked([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // set loading state
      setError(null); // Reset error state

      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/4"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setImages(json.message);
      } catch (e) {
        setError(e);
        console.error("Error fetching dog images:", e);
      } finally {
        // use timeout to create a constant time loading
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchData();
  }, [clicked]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <main>

      {/* use a ternary operator to display the main */}
      {isLost ? (
        <Lost resetGame={resetGame} />
      ) : (
        images.map((image) => {
          return (
            <img
              key={image}
              className="images"
              id={image}
              src={image}
              alt="dog picture"
              onClick={handleClick}
            />
          );
        })
      )}
    </main>
  );
}

export default Main;
