import { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [images, setImages] = useState([]);

  console.log("https://dog.ceo/api/breeds/image/random/6");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((response) => response.json())
      .then((json) => setImages(json.message));
  }, []);

  return (
    <>
      <h1>Dog Memory Game</h1>
      <main>
        {images.map((image) => {
          return (
            <div key={image} class="images">
              <img src={image} alt="dog picture" />
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
