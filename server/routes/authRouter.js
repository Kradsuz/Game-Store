const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username && !email && !password) return res.sendStatus(401);
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        pass: await bcrypt.hash(password, 10),
        username,
      },
    });
    if (!created) return res.sendStatus(401);
    req.session.user = { id: user.id, username, email };
    return res.json({ ...req.session.user });
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

authRouter.post('/signin', async (req, res) => {
  const { email, pass } = req.body;
  console.log(req.body);
  if (!email && !pass) return res.sendStatus(401);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(401);
    if (user && (await bcrypt.compare(pass, user.pass))) {
      req.session.user = { id: user.id, username: user.username, email };
      return res.json({ ...req.session.user });
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

authRouter.get('/check', (req, res) => {
  if (req.session.user) {
    return res.json({ ...req.session.user });
  }
  return res.sendStatus(401);
});

authRouter.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid');
  res.sendStatus(200);
});

module.exports = authRouter;
