const Anime = require("../models/Anime");

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

exports.getAllAnime = async (req, res) => {
  try {
    const anime = await Anime.find();

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAnimeById = async (req, res) => {
  try {
    const anime = await Anime.findById(
      req.params.id
    );

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

exports.getAnimeByGenre = async (req, res) => {
  try {
    const anime = await Anime.find({
      genre: req.params.genre,
    });

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateAnime = async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteAnime = async (req, res) => {
  try {
    await Anime.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Anime Deleted",
    });
  } catch (error) { 
    res.status(500).json({
      message: error.message,
    });
  }
};