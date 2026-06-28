import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AnimeCard from "../components/AnimeCard";

import { getAllAnime } from "../services/animeService";

import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import TrendingCarousel from "../components/TrendingCarousel";

import FeaturedProducts from "../components/FeaturedProducts";
import WhyAnimeVerse from "../components/WhyAnimeVerse";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");

const [selectedGenre, setSelectedGenre] =
useState("All");

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAllAnime();
      setAnime(data);
    };

    fetchAnime();
  }, []);

  const filteredAnime = anime.filter((item)=>{

const searchMatch=item.title
.toLowerCase()
.includes(search.toLowerCase());

const genreMatch=
selectedGenre==="All" ||
item.genre.includes(selectedGenre);

return searchMatch && genreMatch;

});

  return (
    <>
      <Navbar/>

      <Hero/>

<SearchBar
search={search}
setSearch={setSearch}
/>

<GenreFilter
selectedGenre={selectedGenre}
setSelectedGenre={setSelectedGenre}
/>

<TrendingCarousel anime={anime}/>

<div
id="anime-section"
style={{
width:"90%",
margin:"50px auto"
}}
>

<h1>Anime Collection</h1>


<div className="anime-grid">

{filteredAnime.map((item)=>(

<AnimeCard
key={item._id}
anime={item}
/>

))}

</div>
<FeaturedProducts />

<WhyAnimeVerse />

<Footer />

</div>
    </>
  );
}

export default Home;