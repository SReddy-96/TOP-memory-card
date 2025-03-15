import Loading from "./loading.jsx";
import { useEffect, useState } from "react";
import "../styles/main.css";

function Main() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // set loading state
      setError(null); // Reset error state

      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/6"
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
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <main>
      {images.map((image) => {
        return (
          <div key={image} className="images">
            <img src={image} alt="dog picture" />
          </div>
        );
      })}
    </main>
  );
}

export default Main;
