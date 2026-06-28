const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    genre: String,

    poster: String,

    trailer: String,

    storySlides: [String],

    characters: [
      {
        name: String,
        image: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Anime", animeSchema);