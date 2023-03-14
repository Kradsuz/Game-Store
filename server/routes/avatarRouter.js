const multer = require("multer");

const express = require("express");
const path = require("path");
const { User } = require("../db/models");

const avatarRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/img");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

avatarRouter.patch("/addAvatar", upload.single("image"), async (req, res) => {
  try {
    const userId = req.session.user.id;
    console.log(userId);
    const avatar = req.file.path;

    console.log(avatar);
    await User.update(
      { img: avatar.slice(6, avatar.length) },
      {
        where: { id: userId },
      }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = avatarRouter;
