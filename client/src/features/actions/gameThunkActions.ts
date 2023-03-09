import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getGamesThunkAction = createAsyncThunk (
  'games/fetch',
  async (search: string) =>
    axios({
  url: "https://api.igdb.com/v4/age_ratings",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID': 'mygwbxj34b8xm0zrv7pkro5he2bm55',
      'Authorization': 'bearer 2vz0nh5ruj8arjspdiparnwptpsho5',
  },
  data: `fields id, name, cover.image_id, rating, summary, genres.name, platforms, first_release_date;limit 1;where name=${search};`,
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  })
)

export default getGamesThunkAction;
