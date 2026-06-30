import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getAnimeById } from "../services/animeService";
import SummarySlider from "../components/SummarySlider";
import "./AnimeDetails.css";

function AnimeDetails() {
  const { id } = useParams();

  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeById(id);

      setAnime(data);
    };

    fetchAnime();
  }, [id]);

  if (!anime) {
    return (
      <>
        <Navbar />

        <div className="loading">
          <h2>Loading Anime...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="anime-details-page">
        <section
          className="anime-banner"
          style={{
            backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.95),
              rgba(0,0,0,0.5)
            ),
            url(${anime.poster})
            `,
          }}
        >
          <div className="anime-container">
            <img src={anime.poster} alt={anime.title} className="main-poster" />

            <div className="anime-info">
              <h1>{anime.title}</h1>

              <div className="genres">
                {anime.genre
                  ?.split(",")

                  .map((g, index) => (
                    <span key={index}>{g.trim()}</span>
                  ))}
              </div>

              <p>{anime.description}</p>

              {anime.trailer && (
                <a
                  href={anime.trailer}
                  target="_blank"
                  rel="noreferrer"
                  className="watch-btn"
                >
                  ▶ Watch Trailer
                </a>
              )}
            </div>
          </div>
        </section>

        
      <SummarySlider 
slides={anime.storySlides}
/>
        {anime.characters?.length > 0 && (
          <section className="characters-section">
            <h2>Characters</h2>

            <div className="characters-grid">
              {anime.characters.map((character) => (
                <div className="character-box" key={character._id}>
                  <img
                    src={character.image || "https://via.placeholder.com/200"}
                    alt={character.name}
                  />

                  <h3>{character.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      
    </>
  );
}

export default AnimeDetails;
