const express = require("express");

const { GamePlatform, Game, Offer } = require("../db/models");

const gameAndOfferRouter = express.Router();

gameAndOfferRouter.post("/add", async (req, res) => {
  const game = await req.body;
  console.log(game);
});

module.exports = gameAndOfferRouter;
