import { useState } from "react";
import Navbar from "../components/Navbar";
import { addAnime } from "../services/animeService";
// import "./AddAnime.css";

function AddAnime() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    genre: "",
    poster: "",
    trailer: "",

    summarySlides: [""],

    characters: [
      {
        name: "",
        image: "",
      },
    ],
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSlideChange = (index, value) => {
    const slides = [...form.summarySlides];

    slides[index] = value;

    setForm({
      ...form,

      summarySlides: slides,
    });
  };

  const handleCharacterChange = (index, field, value) => {
    const chars = [...form.characters];

    chars[index][field] = value;

    setForm({
      ...form,

      characters: chars,
    });
  };

  const addSlide = () => {
    setForm({
      ...form,

      summarySlides: [...form.summarySlides, ""],
    });
  };

  const addCharacter = () => {
    setForm({
      ...form,

      characters: [
        ...form.characters,
        {
          name: "",
          image: "",
        },
      ],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const cleanData = {
        ...form,

        summarySlides: form.summarySlides.filter(
          (slide) => slide.trim() !== "",
        ),

        characters: form.characters.filter(
          (char) => char.name.trim() !== "" && char.image.trim() !== "",
        ),
      };

      await addAnime(cleanData);

      alert("Anime Added Successfully 🔥");

      setForm({
        title: "",
        description: "",
        genre: "",
        poster: "",
        trailer: "",
        summarySlides: [""],
        characters: [
          {
            name: "",
            image: "",
          },
        ],
      });
    } catch (error) {
      console.log(error);

      alert("Failed to add anime");
    }
  };

  return (
    <>
      <Navbar />

      <div className="add-anime-container">
        <h1>Add New Anime</h1>

        <form onSubmit={submitHandler}>
          <input
            name="title"
            placeholder="Anime Title"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            name="genre"
            placeholder="Genre"
            value={form.genre}
            onChange={handleChange}
          />

          <input
            name="poster"
            placeholder="Poster URL"
            value={form.poster}
            onChange={handleChange}
          />

          <input
            name="trailer"
            placeholder="Trailer URL"
            value={form.trailer}
            onChange={handleChange}
          />

          <h2>Story Slides</h2>

          {form.summarySlides.map((slide, index) => (
            <input
              key={index}
              placeholder={`Slide ${index + 1}`}
              value={slide}
              onChange={(e) => handleSlideChange(index, e.target.value)}
            />
          ))}

          <button type="button" onClick={addSlide}>
            + Add Slide
          </button>

          <h2>Characters</h2>

          {form.characters.map((char, index) => (
            <div key={index}>
              <input
                placeholder="Character Name"
                value={char.name}
                onChange={(e) =>
                  handleCharacterChange(index, "name", e.target.value)
                }
              />

              <input
                placeholder="Character Image URL"
                value={char.image}
                onChange={(e) =>
                  handleCharacterChange(index, "image", e.target.value)
                }
              />
            </div>
          ))}

          <button type="button" onClick={addCharacter}>
            + Add Character
          </button>

          <br />
          <br />

          <button type="submit">Add Anime</button>
        </form>
      </div>
    </>
  );
}

export default AddAnime;
