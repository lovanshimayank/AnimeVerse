import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import { getAnimeById } from "../services/animeService";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import animeStories from "../data/animeStories";
import StorySlider from "../components/StorySlider";



function AnimeDetails() {
  const { id } = useParams();

  const [anime, setAnime] = useState(null);
  

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await getAnimeById(id);
        setAnime(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnime();

    

    
  }, [id]);

  if (!anime) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="anime-details">
        <img src={anime.poster} alt={anime.title} className="anime-poster" />

        <div className="anime-content">
          <h1>{anime.title}</h1>

          <h3>{anime.genre}</h3>

          <p>{anime.description}</p>

          <a href={anime.trailer} target="_blank" rel="noreferrer">
            <button>Watch Trailer</button>
          </a>
        </div>
      </div>

      <div className="story-section">
        <h2>Journey Begins</h2>
        {anime && <StorySlider animeTitle={anime.title} />}
      </div>

      <div className="character-section">
        <h2>Characters</h2>

        <div className="character-grid">
          {anime.characters.map((character, index) => (
            <div key={index} className="character-card">
              <img src={character.image} alt={character.name} />

              <h3>{character.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimeDetails;
