import axios from 'axios';
import 'dotenv/config'
import { auth } from '../../auth';

const albumsURL: string = process.env.ALBUMS_URL || '';

interface Album {
  _id: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}
type Pagination = {
  limit: number
  offset: number
}

export default {
  albums: async ({ limit=5, offset=0 }: Pagination) => {
    const response = await axios.get(`${albumsURL}?limit=${limit}&offset=${offset}`);
    return response.data.items;
  },
  album: async ({ id }: { id: string }) => {
    const response = await axios.get(`${albumsURL}/${id}`);
    return response.data;
  },
  createAlbum: async ({ name, released, artistsIds, bandsIds, genresIds, trackIds, image }: Album) => {
    const response = await axios.post(albumsURL,
      { name, released, artistsIds, bandsIds, genresIds, trackIds, image },
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  updateAlbum: async ({ id, name, released, artistsIds, bandsIds, genresIds, trackIds, image }: { id: number } & Album) => {
    const response = await axios.put(`${albumsURL}/${id}`,
      { name, released, artistsIds, bandsIds, genresIds, trackIds, image },     
     {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
  deleteAlbum: async ({ id }: { id: number }) => {
    const response = await axios.delete(`${albumsURL}/${id}`,
      {
        headers: {
          'Authorization': `Basic ${auth.token}`
        }
      });
    return response.data;
  },
};