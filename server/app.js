import express from "express";

import Movie from "../models/Movie.js";

const app = express();

// TODO: add your endpoints here
app.use(express.static("public"));

app.set("views", "views");

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const movies = await Movie.findAll(req.query.genre);

  res.render("index", {
    genres: Movie.allowedGenres,
    query: req.query,
    movies,
  });
});

app.get("/movie/:movieId", async (req, res) => {
  const { movieId } = req.params;
  const movie = await Movie.findById(movieId);
  const reviews = await Movie.findReviews(movieId);
  res.render("movie/index", {
    movie,
    reviews,
  });
});

export default app;
