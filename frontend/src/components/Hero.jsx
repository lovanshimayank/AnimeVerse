import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroData from "../data/heroData";

import "./Hero.css";

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const hero = heroData[current];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero.image})`,
      }}
    >
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        key={hero.id}
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.h1
          initial={{
            scale: 0.8,
          }}
          animate={{
            scale: 1,
          }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          {hero.subtitle}
        </motion.p>

        <div className="hero-buttons">
          <Link to="/store">
            <button className="hero-btn">
              Explore Store
            </button>
          </Link>

          <a href="#anime-section">
            <button className="hero-btn secondary">
              Explore Anime
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;