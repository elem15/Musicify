import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const genresURL: string = process.env.GENRES_URL || '';

interface Genre {
  _id: string;
  name: string;
  description: string;
  country: string;
  year: string;
}
type Pagination = {
  limit: number
  offset: number
}


export default {
  genres: async ({ limit=5, offset=0 }: Pagination) => {
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
    const response = await axios.delete(`${genresURL}/${id}`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};