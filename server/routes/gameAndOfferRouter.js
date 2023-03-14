const express = require("express");

const { GamePlatform, Game, Offer, Platform } = require("../db/models");

const gameAndOfferRouter = express.Router();

gameAndOfferRouter.post("/add", async (req, res) => {
  const sellerId = req.body.user.id;
  const offer = await req.body.data;
  const game = await req.body.game;
  //   console.log("UUUSEEERID", sellerId);
  //   console.log("GGGAAAAAMMMEEE", game);
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
  //   console.log("OFFER", offer);
  //   console.log("GAME", game);
  //   console.log(new Date(game.first_release_date).getUTCFullYear());
  //   console.log("GAMEIIIDDDDD", gameId.dataValues.id);
  const createPlatform = await Platform.findOrCreate({
    where: { name: offer.platform },
    defaults: { name: offer.platform },
  });
  //   console.log("CREATE", createPlatform);

  const createOffer = await Offer.create({
    price: offer.price,
    time: offer.conditions,
    sellerId,
    payId: 2,
    platformId: createPlatform[0].dataValues.id,
    gameId: createGame[0].dataValues.id,
  });
});
gameAndOfferRouter.post("/sellers", async (req, res) => {
  try {
    const gameAndOfferId = req.body.id;
    const gameAndOffers = await Game.findOne({
      where: { apiGameId: gameAndOfferId },
      include: [{ model: Offer }],
    });
    console.log("IDOOOFFF", gameAndOffers);
    res.json(gameAndOffers);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

gameAndOfferRouter.post("/", async (req, res) => {
  const allGame = await Game.findAll();
  res.json(allGame);
});

module.exports = gameAndOfferRouter;
