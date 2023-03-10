const router = require("express").Router();
const axios = require("axios");

router.route("/").post(async (req, res) => {
  const { search } = req.body;
  await axios({
    url: "https://api.igdb.com/v4/games",
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Client-ID": "mygwbxj34b8xm0zrv7pkro5he2bm55",
      "Authorization": "bearer 2vz0nh5ruj8arjspdiparnwptpsho5",
    },
    data: `fields id, name, cover.image_id, rating, summary, genres.name, platforms, first_release_date;limit 20;search "${search}";`,
  })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
});

module.exports = router;
