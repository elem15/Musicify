import axios from 'axios';
import 'dotenv/config'
import { auth } from '../index';

const genresURL: string = process.env.GENRES_URL || '';

type Genre = {
  name: string
  description: string
  country: String
  year: number
}
type Pagination = {
  limit: number
  offset: number
}


export default {
  genres: async ({limit, offset}: Pagination) => {
    const response = await axios.get(`${genresURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  genre: async ({ id }: { id: string }) => {
    const response = await axios.get(genresURL);
    return response.data.items.find((item: { _id: string }) => item._id === id);
  },
  createGenre: async ({ name, description, country, year }: Genre) => {
    const response = await axios.post(genresURL,
      { name, description, country, year },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  }
};