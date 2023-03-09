const router = require('express').Router();
const { Op } = require('sequelize');
const { Word } = require('../db/models');

router.route('/')
  .post(async (req, res) => {
    const { word } = req.body;
    const words = await Word.findAll({
      where: {
        word: {
          [Op.like]: `%${word}%`,
        },
      },
    });

    res.json(words);
  });

module.exports = router;
