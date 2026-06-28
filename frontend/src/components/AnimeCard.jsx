import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./AnimeCard.css";

function AnimeCard({ anime }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="anime-card"
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/anime/${anime._id}`)}
    >
      <div className="anime-image">
        <img
          src={anime.poster}
          alt={anime.title}
        />

        <div className="anime-overlay">
          <button className="watch-btn">
            View Details →
          </button>
        </div>
      </div>

      <div className="anime-info">
        <h2>{anime.title}</h2>

        <span className="genre-tag">
          {anime.genre}
        </span>
      </div>
    </motion.div>
  );
}

export default AnimeCard;