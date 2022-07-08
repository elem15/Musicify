import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../index';

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
  genres: async ({ limit, offset }: Pagination) => {
    const response = await axios.get(`${genresURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  genre: async ({ id }: { id: string }) => {
    const response = await axios.get(`${genresURL}/${id}`);
    return response.data;
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
  },
  updateGenre: async ({ id, name, description, country, year }: { id: number } & Genre) => {
    const response = await axios.put(`${genresURL}/${id}`,
      { name, description, country, year },     
     {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  deleteGenre: async ({ id }: { id: number }) => {
    const response = await axios.delete(`${genresURL}/62c70dc59521a89d97aa09a4`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};