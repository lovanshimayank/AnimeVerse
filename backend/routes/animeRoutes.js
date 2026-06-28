const express = require("express");
const router = express.Router();

const {
  createAnime,
  getAllAnime,
  getAnimeById,
  updateAnime,
  deleteAnime,
  getAnimeByGenre,
} = require("../controllers/animeController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

/*
PUBLIC ROUTES
*/

router.get("/", getAllAnime);

router.get("/genre/:genre", getAnimeByGenre);

router.get("/:id", getAnimeById);

/*
ADMIN ROUTES
*/

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createAnime
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateAnime
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteAnime
);

module.exports = router;