import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const bandsURL: string = process.env.BANDS_URL || '';

interface Band {
  _id: string;
  name: string;
  origin: string;
  members: string[];
  website: string;
  genresIds: string[];
}
type Pagination = {
  limit: number
  offset: number
}

export default {
  bands: async ({ limit=5, offset=0 }: Pagination) => {
    const response = await axios.get(`${bandsURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  band: async ({ id }: { id: string }) => {
    const response = await axios.get(`${bandsURL}/${id}`);
    return response.data;
  },
  createBand: async ({ name, origin, members, website, genresIds }: Band) => {
    const response = await axios.post(bandsURL,
      { name, origin, members, website, genresIds },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  updateBand: async ({ id, name, origin, members, website, genresIds }: { id: number } & Band) => {
    const response = await axios.put(`${bandsURL}/${id}`,
      { name, origin, members, website, genresIds },     
     {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  deleteBand: async ({ id }: { id: number }) => {
    const response = await axios.delete(`${bandsURL}/${id}`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};