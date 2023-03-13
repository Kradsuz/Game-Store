const express = require("express");

const { GamePlatform, Game, Offer } = require("../db/models");

const gameAndOfferRouter = express.Router();
