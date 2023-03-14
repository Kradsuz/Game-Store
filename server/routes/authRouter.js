const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  const {
    username, email, pass, roleId,
  } = req.body;
  if (!username && !email && !pass && !roleId) return res.sendStatus(401);
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        pass: await bcrypt.hash(pass, 10),
        username,
        roleId,
      },
    });
    if (!created) return res.status(401).send('Почта уже существует');
    req.session.user = {
      id: user.id, username, email, roleId,
    };
    return res.json({ ...req.session.user });
  } catch (err) {
    console.log(err);
    return res.sendStatus(401);
  }
});

// authRouter.post('/signup', async (req, res) => {
//   const {
//     username, email, password, roleId,
//   } = req.body;
//   if (!username && !email && !password && roleId) return res.sendStatus(401);
//   try {
//     const [user, created] = await User.findOrCreate({
//       where: { email },
//       defaults: {
//         pass: await bcrypt.hash(password, 10),
//         username,
//         roleId,
//       },
//     });
//     if (!created) return res.status(401).send('Почта уже существует');
//     req.session.user = user;
//     return res.sendStatus(200);
//   } catch (err) {
//     console.log(err);
//     return res.sendStatus(500);
//   }
// });

authRouter.post('/signin', async (req, res) => {
  const { email, pass } = req.body;
  if (!email && !pass) return res.sendStatus(401);
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.sendStatus(401);
    if (user && (await bcrypt.compare(pass, user.pass))) {
      if (user.img) {
        req.session.user = { id: user.id, username: user.username, email, img: user?.img };
      }
      return res.json({ ...req.session.user });
    }
    return res.sendStatus(401).send('Неверный пароль');
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

// authRouter.post('/signin', async (req, res) => {
//   try {
//     const { pass, email } = req.body;
//     console.log(email, pass);
//     const user = await User.findOne({
//       where: { email },
//     });
//     if (!user) return res.sendStatus(403);
//     const check = await bcrypt.compare(pass, user?.pass);
//     if (check) {
//       req.session.user = user;
//       return res.sendStatus(200);
//     }
//     console.log('Неверный пароль');
//     return res.status(401).send('Неверный пароль');
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });
authRouter.get('/check', (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    return res.json({ ...req.session.user });
  }
  return res.sendStatus(401);
});

authRouter.post('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

module.exports = authRouter;
