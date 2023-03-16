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
      include: [{ model: Offer, include: [{ model: Platform }] }],
    });
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

gameAndOfferRouter.post("/allOffersSeller", async (req, res) => {
  try {
    const userId = req.session.user.id;
    const allOffersSeller = await Offer.findAll({
      where: { sellerId: userId },
      include: [{ model: Game }, { model: Platform }],
    });
    res.json(allOffersSeller);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});
//
gameAndOfferRouter.delete("/offers/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Offer.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = gameAndOfferRouter;
