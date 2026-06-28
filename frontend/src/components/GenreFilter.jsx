import "./GenreFilter.css";

const genres = [
  "All",
  "Action",
  "Adventure",
  "Fantasy",
  "Comedy",
  "Romance",
  
];

function GenreFilter({
  selectedGenre,
  setSelectedGenre,
}) {
  return (
    <div className="genre-container">
      {genres.map((genre) => (
        <button
          key={genre}
          className={
            selectedGenre === genre
              ? "genre active"
              : "genre"
          }
          onClick={() =>
            setSelectedGenre(genre)
          }
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;