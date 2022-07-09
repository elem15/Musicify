import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const tracksURL: string = process.env.TRACKS_URL || '';

interface Track {
  _id: string;
  title: string;  
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

type Pagination = {
  limit: number
  offset: number
}


export default {
  tracks: async ({ limit=5, offset=0 }: Pagination) => {
    const response = await axios.get(`${tracksURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  track: async ({ id }: { id: string }) => {
    const response = await axios.get(`${tracksURL}/${id}`);
    return response.data;
  },
  createTrack: async ({ title, albumId, artistsIds, bandsIds, duration, released, genresIds }: Track) => {
    const response = await axios.post(tracksURL,
      { title, albumId, artistsIds, bandsIds, duration, released, genresIds },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  updateTrack: async ({ id, title, albumId, artistsIds, bandsIds, duration, released, genresIds }: { id: number } & Track) => {
    const response = await axios.put(`${tracksURL}/${id}`,
      { title, albumId, artistsIds, bandsIds, duration, released, genresIds },     
     {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  deleteTrack: async ({ id }: { id: number }) => {
    const response = await axios.delete(`${tracksURL}/${id}`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};