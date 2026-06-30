const Anime = require("../models/Anime");

// GET ALL ANIME
exports.getAllAnime = async (req, res) => {
  try {
    const anime = await Anime.find().sort({ createdAt: -1 });

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE ANIME

exports.getAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);

    if (!anime) {
      return res.status(404).json({
        message: "Anime not found",
      });
    }

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET BY GENRE

exports.getAnimeByGenre = async (req, res) => {
  try {
    const anime = await Anime.find({
      genre: {
        $regex: req.params.genre,
        $options: "i",
      },
    });

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE ANIME

exports.createAnime = async (req, res) => {
  try {
    const anime = await Anime.create(req.body);

    res.status(201).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE ANIME

exports.updateAnime = async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(
      req.params.id,

      req.body,

      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE ANIME

exports.deleteAnime = async (req, res) => {
  try {
    await Anime.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Anime deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
