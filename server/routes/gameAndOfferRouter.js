const express = require("express");

const { GamePlatform, Game, Offer } = require("../db/models");

const gameAndOfferRouter = express.Router();

gameAndOfferRouter.post("/add", async (req, res) => {
  const offer = await req.body.data;
  const game = await req.body.game;
  console.log("GGGAAAAAMMMEEE", game);
  const createGame = await Game.findOrCreate({
    where: { name: game.name },
    defaults: {
      cover: game.cover.image_id,
      date: game.first_release_date,
      genres: game.genres?.map((el) => el.name).join(", "),
      name: game.name,
      rating: game.rating,
      summaru: game.summary,
      apiGameId: game.id,
    },
  });
  console.log("OFFER", offer);
  //   console.log("GAME", game);
  //   console.log(new Date(game.first_release_date).getUTCFullYear());
});

module.exports = gameAndOfferRouter;
