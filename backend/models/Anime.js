const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      required: true,
    },

    trailer: {
      type: String,
      default: "",
    },


    summarySlides: {
      type: [String],
      default: [],
    },


    characters: [
      {
        name: {
          type: String,
          default: "",
        },

        image: {
          type: String,
          default: "",
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);


// Remove old field if accidentally created
animeSchema.set("toJSON", {
  transform: function (doc, ret) {

    delete ret.storySlides;

    return ret;
  },
});


module.exports = mongoose.model(
  "Anime",
  animeSchema
);