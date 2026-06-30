const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
    addAnime,
} = require("../controllers/adminAnimeController");

const {
  createAnime,
  getAllAnime,
  getAnimeById,
  updateAnime,
  deleteAnime,
  getAnimeByGenre,
} = require("../controllers/animeController");




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

router.post(
    "/admin/add",
    authMiddleware,
    adminMiddleware,
    addAnime
);

module.exports = router;