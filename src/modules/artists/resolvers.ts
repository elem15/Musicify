import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const artistsURL: string = process.env.ARTISTS_URL || '';

interface Artist {
  _id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[]
  instruments: string[];
}
type Pagination = {
  limit: number
  offset: number
}


export default {
  artists: async ({ limit=5, offset=0 }: Pagination) => {
    const response = await axios.get(`${artistsURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  artist: async ({ id }: { id: string }) => {
    const response = await axios.get(`${artistsURL}/${id}`);
    return response.data;
  },
  createArtist: async ({ firstName, secondName, middleName, birthDate, country, bandsIds, instruments }: Artist) => {
    const response = await axios.post(artistsURL,
      { firstName, secondName, middleName, birthDate, country, bandsIds, instruments},
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  updateArtist: async ({ id, firstName, secondName, middleName, birthDate, country, bandsIds, instruments }: { id: number } & Artist) => {
    const response = await axios.put(`${artistsURL}/${id}`,
      { firstName, secondName, middleName, birthDate, country, bandsIds, instruments },     
     {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  deleteArtist: async ({ id }: { id: number }) => {
    const response = await axios.delete(`${artistsURL}/${id}`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};